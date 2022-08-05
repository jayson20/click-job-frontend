<template>
    <div>
    <nav class="navbar navbar-expand-lg bg-light navbar py-3 fixed-top">
        <div class="container">
            <a href="#" class="navbar-brand fs-3"><span style="color: blueviolet;">Click</span><span style="color: fuchsia;">Job</span></a>

            <button class="navbar-toggler" type="button" 
            data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navmenu">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="#learn" class="nav-link fs-5">Solutions</a>
                    </li>
                    <li class="nav-item">
                        <a href="#questions" class="nav-link fs-5">Industries</a>
                    </li>
                    <li class="nav-item">
                        <a href="#instructors" class="nav-link fs-5">Services</a>
                    </li>
                    <li class="nav-item">
                        <a href="#instructors" class="nav-link fs-5">Our Croud</a>
                    </li>
                    <li class="nav-item">
                        <a href="#instructors" class="nav-link fs-5">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a href="#instructors" class="nav-link fs-5">Contact</a>
                    </li>
                    
                </ul>
                <div class="navbar-nav ms-auto">
                        <a href="#instructors" class="nav-link btn rounded-5 btn-lg" style="color:white; background-color: fuchsia; ">ClickJob Area</a>
                </div>
            </div>
        </div>
    </nav>
    </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>