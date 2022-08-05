<template>
  <div>
    
    <div
      class="bg-image justify-content-between"
      style="
        background-image: url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29yayUyMHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        
        align-content: center;
      "
    >
    <div style="background-color: rgba(0, 0, 0, 0.6); height: 100%;">
        <div class="container" >
        <div class="row align-items-center">
          <div class="col-3 mx-auto d-flex align-items-center min-vh-100">
            <div class="card border-0 rounded-0 justify-content-center">
              <div>
                <div class="card border-0 rounded-0 text-center bg-light">
                  <div class="card-body text-center">
                    
                    <form>
                        <div class="mb-3">
                            <label for="first-name" class="col-form-label">
                                First Name:
                            </label>
                            <input type="text" class="form-control" id="first-name">
                        </div>
                        <div class="mb-3">
                            <label for="last-name" class="col-form-label">
                                Last Name:
                            </label>
                            <input type="text" class="form-control" id="last-name">
                        </div>
                        <div class="mb-3">
                            <label for="email" class="col-form-label">
                                Email:
                            </label>
                            <input type="email" class="form-control" id="email">
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="col-form-label">
                                Phone:
                            </label>
                            <input type="text" class="form-control" id="phone">
                        </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    
    <!-- <div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-3 mx-auto d-flex align-items-center min-vh-100">
            <div class="card border-0 rounded-0 justify-content-center">
              <div>
                <div class="card border-0 rounded-0 text-center bg-light">
                  <div class="card-body text-center">
                    <img
                      src="https://randomuser.me/api/portraits/men/11.jpg"
                      class="rounded-circle mb-3"
                      alt=""
                    />
                  </div>
                  <h3 class="card-title mb-2">John Doe</h3>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis ratione ut quia nemo fuga minus consequatur saepe
                  </p>
                  <div class="display-flex mb-3">
                    <a href="#"><i class="bi bi-twitter text-dark"></i></a>
                    <a href="#"><i class="bi bi-facebook text-dark"></i></a>
                    <a href="#"><i class="bi bi-instagram text-dark"></i></a>
                    <a href="#"><i class="bi bi-linkedin text-dark"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <router-view />
  </div>
</template>


<script>
import Navbar from "../components/Navbar";

export default {
  name: "UserView",
  components: {
    Navbar,
  },
};
</script>

<style>
</style>
