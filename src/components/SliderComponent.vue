<template>
  <div class="kf_instagram_updates">
    <div class="instagram">
      <figure>
        <img src="../assets/extra-images/instagram-img01.jpg" alt="" />
        <a
          href="../assets/extra-images/instagram-img01.jpg"
          data-rel="prettyPhoto"
        ><i class="fa fa-instagram" aria-hidden="true"></i
        ></a>
      </figure>
    </div>
    <div class="instagram">
      <figure>
        <img src="../assets/extra-images/instagram-img02.jpg" alt="" />
        <a
          href="../assets/extra-images/instagram-img02.jpg"
          data-rel="prettyPhoto"
        ><i class="fa fa-instagram" aria-hidden="true"></i
        ></a>
      </figure>
    </div>
    <div class="instagram">
      <figure>
        <img src="../assets/extra-images/instagram-img03.jpg" alt="" />
        <a
          href="../assets/extra-images/instagram-img03.jpg"
          data-rel="prettyPhoto"
        ><i class="fa fa-instagram" aria-hidden="true"></i
        ></a>
      </figure>
    </div>
    <div class="instagram">
      <figure>
        <img src="../assets/extra-images/instagram-img04.jpg" alt="" />
        <a
          href="../assets/extra-images/instagram-img04.jpg"
          data-rel="prettyPhoto"
        ><i class="fa fa-instagram" aria-hidden="true"></i
        ></a>
      </figure>
    </div>
    <div class="instagram">
      <figure>
        <img src="../assets/extra-images/instagram-img05.jpg" alt="" />
        <a
          href="../assets/extra-images/instagram-img05.jpg"
          data-rel="prettyPhoto"
        ><i class="fa fa-instagram" aria-hidden="true"></i
        ></a>
      </figure>
    </div>
    <div class="instagram">
      <figure>
        <img src="../assets/extra-images/instagram-img06.jpg" alt="" />
        <a
          href="../assets/extra-images/instagram-img06.jpg"
          data-rel="prettyPhoto"
        ><i class="fa fa-instagram" aria-hidden="true"></i
        ></a>
      </figure>
    </div>
    <div class="instagram">
      <figure>
        <img src="../assets/extra-images/instagram-img07.jpg" alt="" />
        <a
          href="../assets/extra-images/instagram-img07.jpg"
          data-rel="prettyPhoto"
        ><i class="fa fa-instagram" aria-hidden="true"></i
        ></a>
      </figure>
    </div>
    <div class="instagram">
      <figure>
        <img src="../assets/extra-images/instagram-img08.jpg" alt="" />
        <a
          href="../assets/extra-images/instagram-img08.jpg"
          data-rel="prettyPhoto"
        ><i class="fa fa-instagram" aria-hidden="true"></i
        ></a>
      </figure>
    </div>
    <div class="instagram">
      <figure>
        <img src="../assets/extra-images/instagram-img09.jpg" alt="" />
        <a
          href="../assets/extra-images/instagram-img09.jpg"
          data-rel="prettyPhoto"
        ><i class="fa fa-instagram" aria-hidden="true"></i
        ></a>
      </figure>
    </div>
    <div class="instagram">
      <figure>
        <img src="../assets/extra-images/instagram-img10.jpg" alt="" />
        <a
          href="../assets/extra-images/instagram-img10.jpg"
          data-rel="prettyPhoto"
        ><i class="fa fa-instagram" aria-hidden="true"></i
        ></a>
      </figure>
    </div>
    <div class="instagram">
      <figure>
        <img src="../assets/extra-images/instagram-img11.jpg" alt="" />
        <a
          href="../assets/extra-images/instagram-img11.jpg"
          data-rel="prettyPhoto"
        ><i class="fa fa-instagram" aria-hidden="true"></i
        ></a>
      </figure>
    </div>
    <div class="instagram">
      <figure>
        <img src="../assets/extra-images/instagram-img12.jpg" alt="" />
        <a
          href="../assets/extra-images/instagram-img12.jpg"
          data-rel="prettyPhoto"
        ><i class="fa fa-instagram" aria-hidden="true"></i
        ></a>
      </figure>
    </div>
    <div class="instagram">
      <figure>
        <img src="../assets/extra-images/instagram-img13.jpg" alt="" />
        <a
          href="../assets/extra-images/instagram-img13.jpg"
          data-rel="prettyPhoto"
        ><i class="fa fa-instagram" aria-hidden="true"></i
        ></a>
      </figure>
    </div>
    <div class="instagram">
      <figure>
        <img src="../assets/extra-images/instagram-img04.jpg" alt="" />
        <a
          href="../assets/extra-images/instagram-img14.jpg"
          data-rel="prettyPhoto"
        ><i class="fa fa-instagram" aria-hidden="true"></i
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
