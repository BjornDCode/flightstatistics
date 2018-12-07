<template>
    <nav class="my-4 flex md:mt-0 md:mb-8">
        <modal title="About">
            <div slot="text">
                <p class="leading-normal mb-4">
                    This website is primarily an experiment. I made it to play around with Vue and SVG's. To find out where the data comes from click on 'Sources' at the bottom of the page. Since the site is an experient it's not meant to be extremely strict or accurate about the data. The data has been chosen because it provided an interesting way to play around with the data visualisation. 
                </p>
                <p class="leading-normal">
                    You can contact me or learn more about me on 
                    <a 
                        href="https://twitter.com/bjornlindholmdk" 
                        target="_blank"
                        class="text-blue-lightest" 
                    >Twitter</a>.
                </p>
            </div>
        </modal>
        <modal title="Sources">
            <div slot="text" >
                <ul class="list-reset">
                    <li class="leading-normal">
                        <span>Most Profitable Routes: </span> 
                        <a 
                            href="https://www.oag.com/blog/billion-dollar-route" 
                            target="_blank"
                            class="text-blue-lightest" 
                        >OAG</a>
                    </li>
                    <li class="leading-normal">
                        <span>Busiest Routes: </span> 
                        <a 
                            href="https://www.routesonline.com/news/29/breaking-news/280568/these-are-the-top-100-busiest-routes-on-earth/" 
                            target="_blank"
                            class="text-blue-lightest"
                        >Routes Online</a>
                    </li>
                    <li class="leading-normal">
                        <span>Busiest Airports: </span> 
                        <a 
                            href="https://thethaiger.com/thai-life/travel/top-10-busiest-airports-in-the-world-first-half-of-2018" 
                            target="_blank"
                            class="text-blue-lightest"
                        >Routes Online</a>
                    </li>
                </ul>
            </div>
        </modal>
    </nav>
</template>
<script>
import Modal from './Modal'

export default {
    components: {
        Modal
    }
}
</script>
