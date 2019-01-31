import React from 'react';

function Buttons() {
  return (
    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
      <div class="btn-group mr-2" role="group" aria-label="First group">
        <button type="button" class="btn btn-secondary">DEAL</button>

      </div>
      <div class="btn-group mr-2" role="group" aria-label="Second group">
        <button type="button" class="btn btn-secondary">NO DEAL</button>

      </div>
      <div class="btn-group" role="group" aria-label="Third group">
        <button type="button" class="btn btn-secondary">NO BREXIT</button>
      </div>
    </div>
  );

}

export default Buttons
