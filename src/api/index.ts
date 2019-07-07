import taroFetch from '@/common/request';
import { isMock } from '@/package';

const API_URL = {
  MOCK_URL: 'http://localhost:3000/',
};

export default function getAppGroup() {
  return taroFetch({
    url: `${isMock ? API_URL.MOCK_URL : API_URL.MOCK_URL}h5/act/appGroup/`,
    options: { isBuildUrl: false },
  });
}
