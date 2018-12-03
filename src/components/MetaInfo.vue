<template>
    <nav>
        <modal>
            <div slot="content">
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
