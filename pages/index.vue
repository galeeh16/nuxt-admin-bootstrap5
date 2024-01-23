<template>
  <div class="card bg-white">
    <div class="card-header">
      <h4 class="card-title">Card Title</h4>
    </div>
    <div class="card-body">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, autem.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, autem.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, autem.</p>

      <div class="d-flex" style="gap: 8px;">
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-dark">Dark</button>
      </div>

      <div class="row mt-5">
        <div class="col-lg-6">

          <div class="mb-4">
            <label for="" class="form-label fw-semibold">Input Text</label>
            <input type="text" class="form-control" placeholder="Enter input...">
          </div>

          <div class="mb-4">
            <label for="" class="form-label fw-semibold">Input Text Readonly</label>
            <input type="text" class="form-control" readonly value="Readonly">
          </div>

          <div class="mb-4">
            <label for="formFile" class="form-label">Default file input example</label>
            <input class="form-control" type="file" id="formFile">
          </div>

          <div class="mb-4">
            <label for="" class="form-label fw-semibold">Select</label>
            <select name="" id="" class="form-select">
              <option value="1">Satu</option>
              <option value="2">Dua</option>
              <option value="3">Tiga</option>
            </select>
          </div>

          <div class="mb-4">
            <label for="" class="form-label fw-semibold">Input Checkbox</label>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">
                Default checkbox
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
              <label class="form-check-label" for="flexCheckChecked">
                Checked checkbox
              </label>
            </div>
          </div>

          <div class="mb-4">
            <label for="" class="form-label fw-semibold">Input Radio</label>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
                Default radio
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
              <label class="form-check-label" for="flexRadioDefault2">
                Default checked radio
              </label>
            </div>
          </div>

          <div class="mb-4">
            <label for="customRange1" class="form-label">Input Range</label>
            <input type="range" class="form-range" id="customRange1">
          </div>

        </div>

        <div class="col-lg-6">
          <div class="mb-4">
            <label for="" class="form-label fw-semibold">Example Modal</label>
            <div>
              <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Open
                modal</button>
            </div>
          </div>

          <div class="mb-4">
            <label for="" class="form-label fw-semibold">Example Dropdown</label>
            <div class="dropdown">
              <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Dropdown link
              </a>

              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>

          <div>
            <label for="" class="form-label fw-semibold">Table</label>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Larry</td>
                  <td>The Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </div>
  </div>

  <Teleport to="body">
    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
      tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Modal 1</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Show a second modal and hide this one with the button below.
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-dismiss="modal">Close
              modal</button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>