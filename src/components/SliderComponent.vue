<template>
  <div class="kf_instagram_updates">
    <div class="instagram">
      <figure>
        <img alt="" src="../assets/extra-images/instagram-img01.jpg" />
        <a data-rel="prettyPhoto" href="../assets/extra-images/instagram-img01.jpg"
          ><i aria-hidden="true" class="fa fa-instagram"></i
        ></a>
      </figure>
    </div>
    <div class="instagram">
      <figure>
        <img alt="" src="../assets/extra-images/instagram-img02.jpg" />
        <a data-rel="prettyPhoto" href="../assets/extra-images/instagram-img02.jpg"
          ><i aria-hidden="true" class="fa fa-instagram"></i
        ></a>
      </figure>
    </div>
    <div class="instagram">
      <figure>
        <img alt="" src="../assets/extra-images/instagram-img03.jpg" />
        <a data-rel="prettyPhoto" href="../assets/extra-images/instagram-img03.jpg"
          ><i aria-hidden="true" class="fa fa-instagram"></i
        ></a>
      </figure>
    </div>
    <div class="instagram">
      <figure>
        <img alt="" src="../assets/extra-images/instagram-img04.jpg" />
        <a data-rel="prettyPhoto" href="../assets/extra-images/instagram-img04.jpg"
          ><i aria-hidden="true" class="fa fa-instagram"></i
        ></a>
      </figure>
    </div>
    <div class="instagram">
      <figure>
        <img alt="" src="../assets/extra-images/instagram-img05.jpg" />
        <a data-rel="prettyPhoto" href="../assets/extra-images/instagram-img05.jpg"
          ><i aria-hidden="true" class="fa fa-instagram"></i
        ></a>
      </figure>
    </div>
    <div class="instagram">
      <figure>
        <img alt="" src="../assets/extra-images/instagram-img06.jpg" />
        <a data-rel="prettyPhoto" href="../assets/extra-images/instagram-img06.jpg"
          ><i aria-hidden="true" class="fa fa-instagram"></i
        ></a>
      </figure>
    </div>
    <div class="instagram">
      <figure>
        <img alt="" src="../assets/extra-images/instagram-img07.jpg" />
        <a data-rel="prettyPhoto" href="../assets/extra-images/instagram-img07.jpg"
          ><i aria-hidden="true" class="fa fa-instagram"></i
        ></a>
      </figure>
    </div>
    <div class="instagram">
      <figure>
        <img alt="" src="../assets/extra-images/instagram-img08.jpg" />
        <a data-rel="prettyPhoto" href="../assets/extra-images/instagram-img08.jpg"
          ><i aria-hidden="true" class="fa fa-instagram"></i
        ></a>
      </figure>
    </div>
    <div class="instagram">
      <figure>
        <img alt="" src="../assets/extra-images/instagram-img09.jpg" />
        <a data-rel="prettyPhoto" href="../assets/extra-images/instagram-img09.jpg"
          ><i aria-hidden="true" class="fa fa-instagram"></i
        ></a>
      </figure>
    </div>
    <div class="instagram">
      <figure>
        <img alt="" src="../assets/extra-images/instagram-img10.jpg" />
        <a data-rel="prettyPhoto" href="../assets/extra-images/instagram-img10.jpg"
          ><i aria-hidden="true" class="fa fa-instagram"></i
        ></a>
      </figure>
    </div>
    <div class="instagram">
      <figure>
        <img alt="" src="../assets/extra-images/instagram-img11.jpg" />
        <a data-rel="prettyPhoto" href="../assets/extra-images/instagram-img11.jpg"
          ><i aria-hidden="true" class="fa fa-instagram"></i
        ></a>
      </figure>
    </div>
    <div class="instagram">
      <figure>
        <img alt="" src="../assets/extra-images/instagram-img12.jpg" />
        <a data-rel="prettyPhoto" href="../assets/extra-images/instagram-img12.jpg"
          ><i aria-hidden="true" class="fa fa-instagram"></i
        ></a>
      </figure>
    </div>
    <div class="instagram">
      <figure>
        <img alt="" src="../assets/extra-images/instagram-img13.jpg" />
        <a data-rel="prettyPhoto" href="../assets/extra-images/instagram-img13.jpg"
          ><i aria-hidden="true" class="fa fa-instagram"></i
        ></a>
      </figure>
    </div>
    <div class="instagram">
      <figure>
        <img alt="" src="../assets/extra-images/instagram-img04.jpg" />
        <a data-rel="prettyPhoto" href="../assets/extra-images/instagram-img14.jpg"
          ><i aria-hidden="true" class="fa fa-instagram"></i
        ></a>
      </figure>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator'
import TripCard from '@/components/TripCardComponent.vue'
import type { Slider } from '@/models/Slider'

@Component({
  components: { TripCard }
})
export default class SliderComponent extends Vue {
  @Prop({ type: Array, required: false }) slides!: Slider[]
}
</script>

<style scoped></style>
