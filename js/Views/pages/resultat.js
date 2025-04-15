
import Page_comp from "../componants/Page_comp.js";

export default class Resultat extends Page_comp {
    async render() {
        
        return Page_comp.renderPage(() => `

<section>

    <P>Score max :</P>
    <P>max time :</P>

    
    <div class="score-box">
        Le score total : <span id="scoreDisplay">--</span>
    </div>

        <ul>

            <li class="partie1">
                <h2>Le quiz</h2>
                <div class="score-box">
                    <span id="scoreDisplay">--</span>
                </div>
            </li>

            <li class="partie1">
                <h2>Le quiz 1</h2>
                <div class="score-box">
                    <span id="scoreDisplay">--</span>
                </div>
            </li>

            <li class="partie1">
                <h2>Le quiz 2</h2>
                <div class="score-box">
                    <span id="scoreDisplay">--</span>
                </div>
            </li>

            <li class="partie1">
                <h2>Le quiz 3</h2>
                <div class="score-box">
                    <span id="scoreDisplay">--</span>
                </div>
            </li>

            <li class="partie1">
                <h2>Le quiz 4</h2>
                <div class="score-box">
                    <span id="scoreDisplay">--</span>
                </div>
            </li>

            <li class="partie1">
                <h2>Le quiz 5</h2>
                <div class="score-box">
                    <span id="scoreDisplay">--</span>
                </div>
            </li>

            <li class="partie1">
                <h2>Le quiz 6</h2>
                <div class="score-box">
                    <span id="scoreDisplay">--</span>
                </div>
            </li>

            <li class="partie1">
                <h2>Le quiz 7</h2>
                <div class="score-box">
                    <span id="scoreDisplay">--</span>
                </div>
            </li>

            <li class="partie1">
                <h2>Le quiz 8</h2>
                <div class="score-box">
                    <span id="scoreDisplay">--</span>
                </div>
            </li>

            <li class="partie1">
                <h2>Le quiz 9</h2>
                <div class="score-box">
                    <span id="scoreDisplay">--</span>
                </div>
            </li>

            <li class="partie1">
                <h2>Le quiz 10</h2>
                <div class="score-box">
                    <span id="scoreDisplay">--</span>
                </div>
            </li>


            <li class="partie2">
                <h2>Snake Trail</h2>
                <div class="score-box">
                   <span id="scoreDisplay">--</span>
                </div>
            </li>

            <li class="partie3" >
                <h2>Spider rider</h2>
                <div class="score-box">
                    <span id="scoreDisplay">--</span>
                </div>
            </li>

        </ul>
    </section>

    `);
    }
    
}