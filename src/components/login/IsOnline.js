import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function IsOnline(props) {
  const [isOnline, setIsOnline] = useState(null);
  useEffect(async () => {
    const resp = await Axios({url: 'https://api.npoint.io/f9c5386c92fa98575fd9', method: 'GET', responseType: 'json' });
    console.log("RESP: ", resp);
    setIsOnline(resp.data.status.isOnline);
  });
  return isOnline ? 'Online' : 'Offline';
}
export default IsOnline;