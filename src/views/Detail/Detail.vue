<template>
  <div class="detail">
    <VHeader :style="{opacity}" class="detail__header">
      <template #left>
        <i class="iconfont iconfanhui" @click="$router.go(-1)"></i>
      </template>
      <template #center> 详情页 </template>
    </VHeader>
    <div class="detail__banner__wrapper">
      <img @click="show=!show" class="detail__banner__img" :src="bannerImg" alt="" />
      <div class="detail__banner__title">{{ sightName }}</div>
    </div>
    <DetailCate :cates="categoryList"></DetailCate>
    <DetailBackBar v-show="showBack" @click.native="$router.go(-1)"/>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
      <li>32</li>
      <li>33</li>
      <li>34</li>
      <li>35</li>
      <li>36</li>
      <li>37</li>
      <li>38</li>
      <li>39</li>
      <li>40</li>
      <li>41</li>
      <li>42</li>
      <li>43</li>
      <li>44</li>
      <li>45</li>
      <li>46</li>
      <li>47</li>
      <li>48</li>
      <li>49</li>
      <li>50</li>
      <li>51</li>
      <li>52</li>
      <li>53</li>
      <li>54</li>
      <li>55</li>
      <li>56</li>
      <li>57</li>
      <li>58</li>
      <li>59</li>
      <li>60</li>
      <li>61</li>
      <li>62</li>
      <li>63</li>
      <li>64</li>
      <li>65</li>
      <li>66</li>
      <li>67</li>
      <li>68</li>
      <li>69</li>
      <li>70</li>
      <li>71</li>
      <li>72</li>
      <li>73</li>
      <li>74</li>
      <li>75</li>
      <li>76</li>
      <li>77</li>
      <li>78</li>
      <li>79</li>
      <li>80</li>
      <li>81</li>
      <li>82</li>
      <li>83</li>
      <li>84</li>
      <li>85</li>
      <li>86</li>
      <li>87</li>
      <li>88</li>
      <li>89</li>
      <li>90</li>
      <li>91</li>
      <li>92</li>
      <li>93</li>
      <li>94</li>
      <li>95</li>
      <li>96</li>
      <li>97</li>
      <li>98</li>
      <li>99</li>
      <li>100</li>
    </ul>
    <Fade>
      <ImgGallery :gallaryImgs="gallaryImgs" v-show="show"  @hide="show=!show"/>
    </Fade>
  </div>
</template>

<script>
import VHeader from 'cm/VHeader'
import DetailCate from './childComps/DetailCate'
import ImgGallery from './childComps/ImgGallery'
import DetailBackBar from './childComps/DetailBackBar'
import Fade from 'cm/Fade'
import { getDetailData } from 'network/detail.js'
import { debounce } from 'utils'
export default {
  name: 'Detail',
  components: {
    VHeader,
    DetailCate,
    ImgGallery,
    DetailBackBar,
    Fade
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      categoryList: [],
      gallaryImgs: [],
      show: false,
      showBack: false,
      opacity: 1
    }
  },
  mounted () {
    this.getDetailData()
    this.scrollFn = debounce((e) => {
      console.log(document.documentElement.scrollTop)
      const height = document.documentElement.scrollTop
      if (height > 43) {
        if (this.opacity) {
          this.opacity = 0
        }
        if (this.showBack) {
          return
        }
        this.showBack = true
      } else {
        this.opacity = (43 - height) / 43
        if (!this.showBack) {
          return
        }
        this.showBack = false
      }
    }, 20)
    window.addEventListener('scroll', this.scrollFn)
  },
  methods: {
    async getDetailData () {
      try {
        const id = this.$route.params.id
        const data = await getDetailData(id)
        // console.log(data)
        const { sightName, bannerImg, categoryList, gallaryImgs } = data
        // 使用数据之前要在 data 中先定义。
        this.sightName = sightName
        this.bannerImg = bannerImg
        this.categoryList = categoryList
        this.gallaryImgs = gallaryImgs
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.detail {
  font-size: 0.16rem;
  margin-top: .43rem;
  &__header {
    position: fixed;
    top: 0;
    width: 100%;
    height: .43rem;
    z-index: 1;
  }
  &__banner {
    &__wrapper {
      position: relative;
      height: 0;
      background: red;
      padding-bottom: 55%;
    }
    &__img {
      width: 100%;
    }
    &__title {
      position: absolute;
      bottom: 0%;
      width: 100%;
      line-height: 0.36rem;
      color: #fff;
      background-color: rgba($color: #000000, $alpha: 0.5);
    }
  }
}
</style>
