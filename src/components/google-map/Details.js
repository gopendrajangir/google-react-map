import React from 'react';

export default ({ data }) => (
  <div>
    {data.fullname}<br/>
    {data.city}<br/>
    {data.phone}
  </div>
);
