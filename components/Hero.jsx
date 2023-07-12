import React from 'react'

function Hero() {
  return (
    <>
      <div class="pattern-1"></div>
      <div class="container">
        <div class="dancing-box-wrap">
          <div class="dancing-box">
            <div class="box-cube">
              <div class="box-faces box-front"></div>
              <div class="box-faces box-back"></div>
              <div class="box-faces box-top"></div>
              <div class="box-faces box-bottom"></div>
              <div class="box-faces box-left"></div>
              <div class="box-faces box-right"></div>
            </div>
          </div>
        </div>
        <div class="brand-n-btn">
          <h2 class="brand-tagline">
            <span class="txt-color-1">Build, </span
            ><span class="txt-color-2">test, </span
            ><span class="txt-color-3">and </span
            ><span class="txt-color-4">execute your ideas </span
            ><span class="txt-color-3">with our </span
            ><span class="txt-color-5">innovative solutions</span
            ><span class="txt-color-2">.</span>
          </h2>
          <div class="cta-btn-group">
            <a
              href="#"
              class="btn cta-btn cta-1"
              ><span class="cta1-icon"></span
              ><span class="cta-txt">Chat now on Whatsapp</span></a
            ><a class="btn cta-btn cta-2" href="services.html"
              ><span class="cta-icon"></span
              ><span class="cta-txt">Explore Our Services</span></a
            >
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
