import { Grid } from '@mui/material'
import CubePicDesk from '../../assets/images/image-web-3-desktop.jpg'

import styles from './firstGridContent.module.css';

export default function FirstGrid(){
    return(
        <div className={styles.container}>
            <Grid container spacing={2}>
                <Grid item md={9} xs={12}>
                    <Grid item md={12} xs={12}>
                        <img src={CubePicDesk} alt="CubePicDesk" className={styles.cubeImage} />
                    </Grid>
                    <Grid container spacing={2} className={styles.content}>
                        <Grid item md={6} xs={12}>
                            <h1>The Bright Future of Web 3.0?</h1>
                        </Grid>
                        <Grid item md={6} xs={12} className={styles.subcontent}>
                            <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>

                            <button type='submit'>READ MORE</button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={3} xs={12}>
                    <div className={styles.sideGrid}>
                        <h2>New</h2>
                        <div className={styles.sideGridContent}>
                            <h3>Hydrogen VS Electric Cars</h3>
                            <p>Will hydrogen-fueled cars ever catch up to EVs? </p>
                        </div>
                        <hr />
                        <div className={styles.sideGridContent}>
                            <h3>The Downsides of AI Artistry</h3>
                            <p>What are the possible adverse effects of on-demand AI image generation? </p>
                        </div>
                        <hr />
                        <div className={styles.sideGridContent}>
                            <h3>Is VC Funding Drying Up? </h3>
                            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means. </p>
                        </div>
                        
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}