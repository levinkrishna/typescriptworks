interface car{
    drive()
    accelarate()
    break()
}



class Swift implements car{
    drive(){
        console.log("swift drive");
    }

    accelarate(){
        console.log("swift accelarate");
    }
    break(){
        console.log("swift break");

    }
}

class Beleno implements car{
    drive(){
        console.log("beleno drive");
    }

    accelarate(){
        console.log("beleno accelarate");
    }
    break(){
        console.log("beleno break");

    }
}

