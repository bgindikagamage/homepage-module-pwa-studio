import { sendRequest } from '../Network/RestMagento';

export const getHomeData = (callBack) => {
    sendRequest('rest/V1/simiconnector/homes/lite', callBack);
}