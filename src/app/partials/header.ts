
export class Header {
  // Private header property
  private static headerContent: any = `
    <nav class="navbar navbar-expand-lg navbar-light bg-none">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">MySite</a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
          </ul>
          <div class="d-flex">
            <a routerLink="/" routerLinkActive="router-link-active" class="btn btn-outline-dark me-2">Login</a>
            <a routerLink="/register" routerLinkActive="router-link-active" class="btn btn-light">Sign Up</a>
          </div>
        </div>
      </div>
    </nav>
  `;

  // Static method to get header content
  static getHeader(): any {
    return this.headerContent;
  }
}
