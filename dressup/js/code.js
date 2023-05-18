var state = {
    d: 0
};

function nextdress() {
    console.log("inside fuction nextdress");
    console.log(state.d);
    var dress = document.getElementById("clothes");
    if (state.d === 0) {
    dress.setAttribute("class", "dress1");
        state.d++;
        console.log(state.dres);
    }
    else
        if (state.d === 1) {
    dress.setAttribute("class", "dress2");
            state.d++;
            console.log(state.d);
        }
        else
            if (state.d === 2) {
        dress.setAttribute("class", "dress3");
                state.d = 0;
            }
}