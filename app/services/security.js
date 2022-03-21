// @ts-ignore
import Service from '@ember/service';

export default class SecurityService extends Service {
  async sendRequest(
    urlPath, 
    method = 'GET', 
    body = undefined, 
    contentType = 'application/json'
    ) {
      let headers = {
        'content-type': contentType
      };

      let url = 'http://localhost:3000';

      if (!urlPath.startsWith('/')) {
        url += `/${urlPath}`;
      } else {
        url += urlPath;
      }

      const response = await fetch(url, {
        method,
        headers,
        body: JSON.stringify(body)
      });
      
      let responseBody = undefined;
      try {
        responseBody = await response.json();
      } catch (e) {}

      return responseBody;
  }

  //   async sendRequest(url, method, body) {
  //   const response = await fetch (url, {
  //     method: method,
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(body)      
  //   });

  //   return response.json()
  // }


  // async getUsers(url, data) {
  //   const response = await fetch (url, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   });

  //   return response.json();
  // }
}
