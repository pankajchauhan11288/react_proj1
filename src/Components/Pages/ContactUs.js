import React from 'react';

const ContactUs = () => {
  return <div>
      <h1>Contact Us</h1>
      <div className="mb-3">
  <label for="formFile" className="form-label">Default file input example</label>
  <input className="form-control" type="file" id="formFile"/>
</div>
<div className="mb-3">
  <label for="formFileMultiple" className="form-label">Multiple files input example</label>
  <input className="form-control" type="file" id="formFileMultiple" multiple/>
</div>
<div className="mb-3">
  <label for="formFileDisabled" className="form-label">Disabled file input example</label>
  <input className="form-control" type="file" id="formFileDisabled" disabled/>
</div>
<div className="mb-3">
  <label for="formFileSm" className="form-label">Small file input example</label>
  <input className="form-control form-control-sm" id="formFileSm" type="file"/>
</div>
<div>
  <label for="formFileLg" className="form-label">Large file input example</label>
  <input className="form-control form-control-lg" id="formFileLg" type="file"/>
</div>
  </div>;
};

export default ContactUs;
