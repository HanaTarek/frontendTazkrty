import React, { useState } from 'react';
import axios from 'axios';
import './profile.css';

const Profile = () => {
  return (
    <div>
        <div class="container py-5 h-100 contain">
            <div class="row d-flex justify-content-center">
                <div class="col col-lg-9 col-xl-8">
                        <div class="card">
                                <div class="rounded-top text-white d-flex flex-row edit-profile" >
                                            <div class="ms-4 mt-5 d-flex flex-column card">
                                                <img 
                                                    alt="Generic placeholder image" class="img-fluid img-thumbnail mt-4 mb-2 imggg" />
                                            </div>
                                             <div class="ms-3 country">
                                                <h5>Andy Horwitz</h5>
                                                <p>New York</p>
                                            </div>
                                </div>
                                 <div class="p-4 text-black bg-body-tertiary">
                                            <div class="d-flex justify-content-end text-center py-1 text-body">
                                            <div>
                                                    <p class="mb-1 h5">253</p>
                                                    <p class="small text-muted mb-0">Photos</p>
                                                </div>
                                                <div class="px-3">
                                                    <p class="mb-1 h5">1026</p>
                                                    <p class="small text-muted mb-0">Followers</p>
                                                </div>
                                                <div>
                                                    <p class="mb-1 h5">478</p>
                                                    <p class="small text-muted mb-0">Following</p>
                                                </div>
                                            </div>
                                 </div>
                                <div class="card-body p-4 text-black">
                                    <div class="mb-5  text-body">
                                    <p class="lead fw-normal mb-1">About</p>
                                        <div class="p-4 bg-body-tertiary">
                                            <p class="font-italic mb-1">Web Developer</p>
                                            <p class="font-italic mb-1">Lives in New York</p>
                                            <p class="font-italic mb-0">Photographer</p>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center mb-4 text-body">
                                    <p class="lead fw-normal mb-0">Recent photos</p>
                                    <p class="mb-0"><a href="#!" class="text-muted">Show all</a></p>
                                    </div>
                                    <div class="row g-2">
                                    <div class="col mb-2">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp" class="w-100 rounded-3" alt="image 1" />
                                        
                                    </div>
                                    <div class="col mb-2">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp" alt="image 1"
                                        class="w-100 rounded-3" />
                                    </div>
                                    </div>
                                    <div class="row g-2">
                                    <div class="col">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp" alt="image 1"
                                        class="w-100 rounded-3" />
                                    </div>
                                        <div class="col">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp" alt="image 1"
                                            class="w-100 rounded-3" />
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

    </div>
  );
};

export default Profile;