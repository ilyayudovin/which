import Compressor from 'compressorjs';
import axios from 'axios';
import Bluebird from 'bluebird';
import { get } from '../requests';

interface ProgressEvent {
  loaded: number;
  total: number;
}

type SetProgress = (progress: number) => void;


const compressFile = (file: File, quality = 0.6): Promise<File | Blob> => {
  return new Promise((resolve, reject) => {
    if (quality === 1) return resolve(file);
    return new Compressor(file, {
      success: result => resolve(result),
      error: err => reject(err),
      quality
    });
  });
};

export default (file: File, quality?: number, setProgress?: SetProgress): Promise<string> => {
  const onUploadProgress = (progressEvent: ProgressEvent): void => {
    if (setProgress) {
      const { loaded, total } = progressEvent;
      // Only allow upload progress reach 95%, and set 100% when request is resolved
      const progress = Math.round((loaded * 95) / total);
      setProgress(progress);
    }
  };

  const config = {
    headers: { 'Content-Type': 'image/png' },
    onUploadProgress
  };

  // Add querystring to avoid caching request in some browsers, see
  // https://stackoverflow.com/questions/59339561/safari-skipping-xmlhttprequests
  return Bluebird.all([get(`/files?key=${file.name}`), compressFile(file, quality)])
    .then(([response, compressedFile]) => {
      const uploadUrl = response.data;
      return axios.put(uploadUrl, compressedFile, config);
    })
    .then(response => {
      if (setProgress) setProgress(100);
      const uri = response.config.url;
      return uri ? uri.slice(0, uri.indexOf('?')) : '';
    });
};

