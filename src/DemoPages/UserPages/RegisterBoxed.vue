<template>
    <div>
     
            <div>
                <div class="row">
                    <div class="col-md-7 demo-line">
                            <div id="demo" class="carousel slide" data-ride="carousel">

                            <!-- Indicators -->
                            <ul class="carousel-indicators">
                                <li data-target="#demo" data-slide-to="0" class="active act"></li>
                                <li data-target="#demo" data-slide-to="1"></li>
                                <!-- <li data-target="#demo" data-slide-to="2"></li> -->
                            </ul>
                            <!-- The slideshow -->
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                  
                                <img src="@/assets/images/man.png" alt="Los Angeles">
                                <div class="carousel-caption">
                                     <h4 class="text-white text-center">
                                    No Hazzles
                                </h4>
                                <p class="text-white text-center">
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                </p>
                                </div>
                                </div>
                                <div class="carousel-item">
                                <img src="@/assets/images/man.png" alt="Chicago">
                                </div>
                                <!-- <div class="carousel-item">
                                <img src="ny.jpg" alt="New York" width="1100" height="500">
                                </div> -->
                            </div>
                            
                        
                            </div>

                    </div>
                    <div  class="mx-auto app-login-box mt-5 col-md-5">
                        
                            <h5 class="text-center font-weight-bold ml-2 new-text">Create your free account</h5>
                            <p class="text-center al">Already registered?<span class="text-success">  Sign-in</span></p>
                        

                        <div class="modal-dialog dia shadow w-100">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <h5 class="modal-title">
                                    </h5>
                                   
                                     <form>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="inputAddress" style="color: #6A7E8A;font-size: 16px;">First Name</label>
                                                <div class="input-group" style="color: #013C61;font-size: 20px;">
                                                    <input type="text" class="form-control" id="inputAddress" placeholder="Joshua">
                                                        <div class="input-group-addon fon"><font-awesome-icon  icon="user"/></div>
                                                </div>
                                            <div class="line"></div>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputAddress2" style="color: #6A7E8A;font-size: 16px;">Last Name</label>
                                                <div class="input-group" style="color: #013C61;font-size: 20px;">
                                                    <input type="text" class="form-control" placeholder="Bakare" id="inputAddress">
                                                    <div class="input-group-addon fon"><font-awesome-icon  icon="user"/></div>
                                                </div>
                                            <div class="line"></div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="inputEmail4" style="color: #6A7E8A;font-size: 16px;">Email</label>
                                                <div class="input-group" style="color: #013C61;font-size: 20px;">
                                                     <input type="email" class="form-control" id="inputEmail4" placeholder="josh.bakare@gmail.com">
                                                    <div class="input-group-addon fon"><font-awesome-icon  icon="at"/></div>
                                                </div>
                                            <div class="line"></div>
                                        </div>
                                        <div class="form-group">
                                           <label for="inputPassword4" style="color: #6A7E8A;font-size: 16px;">Password </label>
                                            <div class="input-group" style="color: #013C61;font-size: 20px;">
                                                <input type="password" class="form-control fa fa-eye" id="inputPassword4"  placeholder="**********">
                                                <div class="input-group-addon fon"><font-awesome-icon  icon="eye"/></div>
                                            </div>
                                            <div class="line"></div>
                                        </div>
                                    </form>
                                    
                                </div>
                                <div class="modal-footer clearfix">
                                   <div class="float-right">
                                    <router-link class="btn btn-success text-white btn-lg pr-5 pl-5" to="/employees">continue</router-link>
                                    <!-- <b-button variant="primary" size="lg">Login to Dashboard</b-button> -->
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <p>By siging up, you agree to our <span style="color:#2BDA53;">Terms</span> and <span style="color:#2BDA53;">Privacy Policy</span></p>
                            </div>
                            <div class="col-md-6">
                                <p>
                                     &copy;2019 Tinylabs. All right reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
    </div>
</template>
<script>
import {library} from '@fortawesome/fontawesome-svg-core'
    import {
         faUser,
        faAt,
        faEye
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
       faUser,
        faAt,
        faEye
    );
export default {
     components: {
      'font-awesome-icon': FontAwesomeIcon,
    },
}
</script>
<style scoped>
.fon{
        margin-top: 10px;
            font-size: 15px;
}

.app-theme-white.app-container {
    background: none;
}
.modal-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;
    border-top: none;
   
}
.modal-header, .modal-footer {
    background: none;
}
.modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border:  none;
    border-radius: 0.3rem;
    outline: 0;
}
.input-group {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    margin-left: -10px;
    align-items: stretch;
    width: 100%;
}
.btn-success {
background: #2BDA53;

}
.modal-dialog {
    box-shadow: none;
    border-radius: 0.25rem;
}
.carousel-indicators >li {
    border-radius: 50%;
    height: 10px;
    width: 10px;
}
.text-center.new-text{
width: 384px;
font-family: Roboto sans-serif;
font-style: normal;
font-weight: 500;
font-size: 34px;
line-height: 46px;
/* identical to box height, or 135% */

letter-spacing: 0.4px;

color: #013C61;
}
.al{
    width: 238px;
height: 18px;
left: 904px;
top: 163px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
line-height: 18px;
    color: #013C61;
    font-size: 18px;
}
.text-success {
    color: #2BDA53;
}
.form-row {
  margin-left: -15px;
  margin-right: -15px;
}
.form-row .form-group {
  padding: 15px 15px 0;
  align-self: flex-end;
}

.form-group {
  position: relative;
  padding-top: 15px;
  margin-bottom: 30px;
}

.form-control {
  border: 0;
  border-radius: 0;
  padding: 10px 10px;
  background-color: transparent;
  position: relative;
  z-index: 2;
  font-size: 0.9rem;
}
.form-control:not(textarea) {
  height: 44px;
}
.form-control + label {
  position: absolute;
  z-index: 1;
  top: 25px;
  margin: 0;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  pointer-events: none;
  left: 10px;
  right: 10px;
}
.form-control:focus {
  box-shadow: none;
  background-color: transparent;
}
.form-control:focus + label {
  color: #26C6DA;
}
.form-control:focus + label, .form-control.has-value + label {
  font-size: 0.75rem;
  top: 0;
}

.no-js .form-control + label {
  font-size: 0.75rem;
  top: 0;
}

.form-row .form-control + label {
  left: 25px;
  right: 25px;
}
.form-row .line {
  left: 15px;
  right: 15px;
}

.line {
  position: absolute;
  display: block;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
 border: 1px solid #E6E7EB;
}
.line:after {
  content: "";
  height: 2px;
  position: absolute;
  display: block;
 border: 1px solid #E6E7EB;
}

.form-control:focus ~ .line:after {
  -webkit-transform: scaleX(1);
          transform: scaleX(1);
}

select.form-control:not([size]):not([multiple]) {
  height: 44px;
}
@media (min-width: 360px) and (max-width: 640px) {
  .demo-line {
    display:none;
  }

  .text-center.new-text{
    width: unset;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 46px;
    letter-spacing: 0.4px;
    color: #013C61;
}
.al{
    width: unset;

font-family: Roboto;
font-style: none;
font-weight: none;
line-height: 0px;
    color: #013C61;
    font-size: 13px;
}
.dia{
        padding-right: 13px;
}
}
</style>
