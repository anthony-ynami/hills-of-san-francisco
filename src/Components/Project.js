
import { useState, useEffect } from 'react';


const Project = () => {

    //establish the modifiable variable in the 
    const [uno, setUno] = useState(1);
    const [dos, setDos] = useState(1);
    const [tres, setTres] = useState(1);
    const [cuatro, setCuatro] = useState(1);
    const [cinco, setCinco] = useState(1);
    const [seis, setSeis] = useState(1);
    const [siete, setSiete] = useState(1);
    const [ocho, setOcho] = useState(1);


    const [gradient, setGradient] = useState(0)
    var hillHeight = 80 * (Math.tan(gradient * Math.PI / 180))

    //var hillHeight = (80 * (Math.tan(angle * Math.PI / 180)));

    let w = window.innerHeight;

    const handleHill = (e) => {
        const { options, selectedIndex } = e.target;
        setGradient(parseInt(e.target.value));
        const el = document.querySelector(".project-text");
        let streetName = options[selectedIndex].innerHTML;
        if (parseInt(e.target.value) !== 0) {
            el.innerHTML = `<h1>${streetName}'s gradient is ${e.target.value}% </h1>`;
        } else {
            el.innerHTML = `<h1>Select a Hill Below </h1>`;
        }

    }

    const handleChangeUno = (e) => {
        setUno(parseInt(e.target.value));
    }
    const handleChangeDos = (e) => {
        setDos(parseInt(e.target.value));
    }
    const handleChangeTres = (e) => {
        setTres(parseInt(e.target.value));
    }
    const handleChangeCuatro = (e) => {
        setCuatro(parseInt(e.target.value));
    }
    const handleChangeCinco = (e) => {
        setCinco(parseInt(e.target.value));
    }
    const handleChangeSeis = (e) => {
        setSeis(parseInt(e.target.value));
    }
    const handleChangeSiete = (e) => {
        setSiete(parseInt(e.target.value));
    }
    const handleChangeOcho = (e) => {
        setOcho(parseInt(e.target.value));
    }



    useEffect(() => {
        const buildingClasses = [".uno", ".dos", ".tres", ".cuatro", ".cinco", ".seis", ".siete", ".ocho"];
        const valArr = [uno, dos, tres, cuatro, cinco, seis, siete, ocho];
        const heightArr = [];
        for (let val of valArr) { heightArr.push(val * 50) }

        let highest = 0;
        for (let i = 0; i < heightArr.length; i++) {
            let whichBuilding = document.querySelector(buildingClasses[i]);
            heightArr[i] += Math.floor(w * hillHeight * (i + 1) / 1000);
            whichBuilding.style.height = `${heightArr[i]}px`

            if (heightArr[i] > highest) {
                highest = heightArr[i];
                whichBuilding.classList.add("tall")
            } else {
                whichBuilding.classList.remove("tall")
            }
        }

        document.querySelector("#hill").style.borderBottom = `${hillHeight}vh solid black`;


    })


    return (
        <div>
            <div className="project-text">
                <h1>Select a Hill Below</h1>
            </div>

            <div className="building-wrap">
                <div className="building uno tall">
                    <input type="text" id="building-1" value={uno} onChange={handleChangeUno} />
                </div>
                <div className="building dos" >
                    <input type="text" id="building-2" value={dos} onChange={handleChangeDos} />
                </div>
                <div className="building tres">
                    <input type="text" id="building-3" value={tres} onChange={handleChangeTres} />
                </div>
                <div className="building cuatro">
                    <input type="text" id="building-4" value={cuatro} onChange={handleChangeCuatro} />
                </div>
                <div className="building cinco">
                    <input type="text" id="building-5" value={cinco} onChange={handleChangeCinco} />
                </div>
                <div className="building seis">
                    <input type="text" id="building-6" value={seis} onChange={handleChangeSeis} />
                </div>
                <div className="building siete">
                    <input type="text" id="building-7" value={siete} onChange={handleChangeSiete} />
                </div>
                <div className="building ocho">
                    <input type="text" id="building-8" value={ocho} onChange={handleChangeOcho} />
                </div>

            </div>
            <div id="hill"></div>
            <select name="hill-names" id="hill-select" defaultValue={'0'} onChange={handleHill}>
                <option value="0">Select a Hill Below</option>
                <option value="18">Lombard Street</option>
                <option value="31.5">Filbert Street</option>
                <option value="21.3">Hyde Street</option>
                <option value="22.2">Mason Street</option>
                <option value="41">Bradford Street</option>
            </select>

        </div>

    );
}

export default Project;