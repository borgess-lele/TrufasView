<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">DOCE TRUFA</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item">
            <RouterLink class="nav-link " to="/"
              >PÁGINA PRINCIPAL</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/combo">COMBOS</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/sem_lactose">SEM LACTOSE</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/sabores">SABORES</RouterLink>
            </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="pesquisar" type="submit">
            Pesquisar
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>
<style>

.navbar {
  background-color:antiquewhite;
}

.pesquisar {
  background-color:rgb(253, 252, 252)
}
</style>
