document.addEventListener("DOMContentLoaded",()=>{
    function counter(id,start,end,duration){
        let obj = document.getElementById(id),
        current = start,
        range = end-start,
        increment = end> start? 1:-1,
        step = Math.abs(Math.floor(duration / range)),

        timer = setInterval(()=>{

            current += increment;
            obj.textContent = current;

            if(current==end){
                clearInterval(timer);
            }
        },step)
    }

    counter("count1",0 ,124,3000)
    counter("count2",0 ,394,3000)
    counter("count3",0 ,365,3000)
    counter("count4",0 ,124,3000)
    counter("count5",0 ,124,3000)
    counter("count6",0 ,124,3000)
    counter("count7",0 ,124,3000)
    counter("count8",0 ,140,3000)
    counter("count9",0 ,394,3000)
    counter("count10",0 ,865,1000)
    counter("count11",0 ,124,3000)
    counter("count12",0 ,394,3000)
    counter("count13",0 ,160,3000)
    counter("count14",0 ,760,3000)
    counter("count15",0 ,225,3000)
    counter("count16",0 ,260,3000)
})


$(document).ready(function(){
    $('#about2').hide()
    $('#about3').hide()
})
 $(document).ready(function(){
    $('#click').click(function(){
        $('#about1').show()
        $('#about2').hide()
        $('#about3').hide()

    })
})
$(document).ready(function(){
     $('#click2').click(function(){
        $('#about2').show()
        $('#about1').hide()
        $('#about3').hide()   
    })
})
$(document).ready(function(){
    $('#click3').click(function(){
        $('#about3').show()
        $('#about2').hide()
        $('#about1').hide()
    })
})

