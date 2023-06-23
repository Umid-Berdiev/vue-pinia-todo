<template>
  <div class="container">
    <header>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <RouterLink class="navbar-brand" to="/app">Todo</RouterLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <RouterLink class="nav-link" to="/app">Home Page</RouterLink>
              <RouterLink class="nav-link" to="/app/todos"
                >Todo Page</RouterLink
              >
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
  <div class="container">
    <slot></slot>
  </div>
</template>
