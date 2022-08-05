<template>
  <div>
    <Navbar />
    <div
      class="bg-image justify-content-between"
      style="
        background-image: url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29yayUyMHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        height: 90vh;
        align-content: center;
      "
    >
    <div style="background-color: rgba(0, 0, 0, 0.6); height: 100%;">
        <div class="container" >
        <div class="d-sm-flex mt-5 m-3 ">
          <div class="row mt-3 text-center">
            <div class="col">
                <div style="height: 130px">
                </div>
              <h1 class="text-white">
                Best Opportunity to Earn Daily on a Job
              </h1>
              <h4 class="text-white">
                ClickJob creates a unique opportunity for millions of internet users to earn passive income through 1000 job opportunities created by our team.
              </h4>
              <a href="#" class="btn text-white hov border mt-3 btn-lg rounded-5 fs-3" style="background-color: fuchsia;">Sign In</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    <!-- Boxes -->
    <section class="p-5" style="background-color:pink">
        <div class="container">
            <div class="row text-center g-4">
                <div class="col-md">
                    <div class="card bg-dark text-light">
                        <div class="card-body text-center">
                            <div class="h1 mb-3">
                                <i class="bi bi-laptop"></i>
                            </div>
                            <h3 class="card-title mb-3">
                                Virtual
                            </h3>
                            <p class="card-text">
                                Lorem ipsum dolor sit, amet 
                                consectetur adipisicing elit. 
                                Cupiditate neque rerum quas ad possimus animi.
                            </p>
                            <a href="#" class="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md">
                    <div class="card bg-secondary text-light">
                        <div class="card-body text-center">
                            <div class="h1 mb-3">
                                <i class="bi bi-person-square"></i>
                            </div>
                            <h3 class="card-title mb-3">
                                Hybrid
                            </h3>
                            <p class="card-text">
                                Lorem ipsum dolor sit, amet 
                                consectetur adipisicing elit. 
                                Cupiditate neque rerum quas ad possimus animi.
                            </p>
                            <a href="#" class="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md">
                    <div class="card bg-dark text-light">
                        <div class="card-body text-center">
                            <div class="h1 mb-3">
                                <i class="bi bi-people"></i>
                            </div>
                            <h3 class="card-title mb-3">
                                In Person
                            </h3>
                            <p class="card-text">
                                Lorem ipsum dolor sit, amet 
                                consectetur adipisicing elit. 
                                Cupiditate neque rerum quas ad possimus animi.
                            </p>
                            <a href="#" class="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Learn -->
    <section class="p-5" id="learn">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                    <div class="col-md">
                        <img src="../assets/image1.png" class="img-fluid w-40" alt="">
                    </div>
                    <div class="col-md p-5">
                    <h2>Learn Fundamentals</h2>
                        <p class="lead">
                            Lorem ipsum dolor sit amet consectetur, adipisicing 
                            elit. Voluptates ad delectus harum doloremque nisi sint eaque, 
                            veritatis iusto
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In dignissimos, exercitationem recusandae eaque ad optio facere id error. Natus tenetur commodi autem nostrum facere doloremque dolorem dicta fugit ducimus incidunt?
                        </p>
                        <a href="#" class="btn btn-light mt-3">
                            <i class="bi bi-chevron-right"></i> Read More
                        </a>
                    </div>
            </div>
        </div>
    </section>

    <section class="p-5 bg-dark text-light" id="learn">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-md p-5">
                    <h2>Learn React</h2>
                    <p class="lead">
                        Lorem ipsum dolor sit amet consectetur, adipisicing 
                        elit. Voluptates ad delectus harum doloremque nisi sint eaque, 
                        veritatis iusto
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In dignissimos, exercitationem recusandae eaque ad optio facere id error. Natus tenetur commodi autem nostrum facere doloremque dolorem dicta fugit ducimus incidunt?
                    </p>
                    <a href="#" class="btn btn-light mt-3">
                        <i class="bi bi-chevron-right"></i> Read More
                    </a>
                </div>
                <div class="col-md">
                    <img src="../assets/image3.svg" class="img-fluid w-40" alt="">
                </div>
            </div>
        </div>
    </section>

       <!-- Questions Accordion-->
    <section class="p-5" id="question">
        <div class="container">
            <h2 class="text-center mb-4">
                Frequently Asked Questions
            </h2>
            <div class="accordion accordion-flush" id="questions">

                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#question-one">
                            Where exactly are you located?
                        </button>
                    </h2>
                    <div id="question-one" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                        data-bs-parent="#questions">
                        <div class="accordion-body">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum ipsum sequi aperiam non sapiente doloremque!
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#question-two" aria-expanded="false" aria-controls="question-two">
                            What is the curriculum?
                        </button>
                    </h2>
                    <div id="question-two" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                        data-bs-parent="#questions">
                        <div class="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sapiente placeat eveniet eius voluptatibus incidunt tenetur unde commodi quidem amet.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#question-three" aria-expanded="false" aria-controls="question-three">
                            When is the bootcamp starting?
                        </button>
                    </h2>
                    <div id="question-three" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                        data-bs-parent="#questions">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate
                            the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more
                            exciting happening here in terms of content, but just filling up the space to make it look, at
                            least at first glance, a bit more representative of how this would look in a real-world
                            application.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#question-four" aria-expanded="false" aria-controls="question-four">
                            How much will it cost?
                        </button>
                    </h2>
                    <div id="question-four" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                        data-bs-parent="#questions">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate
                            the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more
                            exciting happening here in terms of content, but just filling up the space to make it look, at
                            least at first glance, a bit more representative of how this would look in a real-world
                            application.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#question-five" aria-expanded="false" aria-controls="question-five">
                            Will you help me find job?
                        </button>
                    </h2>
                    <div id="question-five" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                        data-bs-parent="#questions">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate
                            the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more
                            exciting happening here in terms of content, but just filling up the space to make it look, at
                            least at first glance, a bit more representative of how this would look in a real-world
                            application.</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact and Map -->
    <section class="p-5">
        <div class="container">
            <div class="row g-4">
                <div class="col-md">
                    <h2 class="text-center mb-4">Contact Info</h2>
                    <ul class="list-group list-group-flush lead">
                        <li class="list-group-item">
                            <span class="ffw-bold">Main Location</span>50 Main Street Boston MA
                        </li>
                        <li class="list-group-item">
                            <span class="ffw-bold">Enrollment Phone</span> (555) 777-3233
                        </li>
                        <li class="list-group-item">
                            <span class="ffw-bold">Student Phone</span>(555) 777-3233
                        </li>
                        <li class="list-group-item">
                            <span class="ffw-bold">Main Location</span>info@bootcamp.com
                        </li>
                    </ul>
                </div>
                <div class="col-md">

                </div>
            </div>
        </div>
    </section>

      <!-- Footer -->
    <footer class="p-5 bg-dark text-white text-center position-relative">
        <div class="container">
            <p class="lead">Copyright &copy; 2021 Frontend Bootcamp</p>
            
            <a href="#" class="position-absolute bottom-0 end-0 p-5">
                <i class="bi bi-arrow-up-circle h1"></i>
            </a>
        </div>
    </footer>

    <!-- Login Modal -->
    <div class="modal fade" id="enroll" tabindex="-1" aria-labelledby="enrollLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="enrollLabel">Enrollment</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="lead">Fill out this form and we will get back to you</p>
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
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "Landing",
  components: {
    Navbar
},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hov:hover{
  background-color: pink;
  border: 0%;
}
</style>