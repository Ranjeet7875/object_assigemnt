class Iphone3{
    constructor(ASIN,color,display,camera,bluetooth){
        this.ASIN=ASIN,
        this.color=color,
        this.display=display,
        this.camera=camera,
        this.bluetooth=bluetooth
    }
    dial(){
        return "tring...Tring..."
    }
    sendMessage(){
        return "sending Message"
    }
    cameraClick(){
        return "Camera Clicked"
    }
    Bluetooth(){
        return "Bluetooth connected succ"
    }
    
}
let person1=new Iphone3(1,"red","890mm","90cm","1985GB")
console.log(person1.ASIN)
console.log(person1.color)
console.log(person1.display)
console.log(person1.color)
console.log(person1.bluetooth)
console.log(person1.dial())
console.log(person1.sendMessage())
console.log(person1.cameraClick())
console.log(person1.Bluetooth())