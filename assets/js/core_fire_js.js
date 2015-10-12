/*
    Project: JS Game Engine
    Part Name: Fire Animation
    Author: Gkiokan
    Date: 12.10.2015
    Comments: -//-
*/


fire = {
    
        
    data : {
        player : { 
            name : '.player .name',
            hp: '.player .hp',
            mp: '.player .mp'
        },
        
        map : {
            background : '.map .background',
            foreground : '.map .foreground',
            mainground : '.map .mainground',
            data: '.map .data'
        },
        
        fire : {
            class : '.fire'
        },
        
        debug : {
            mouse : '.debug .mouse',
            fire  : '.debug .firecount',
            firecount : 0,
        }
         
    },
    
    init: function(){     
        console.log('Fire Class Initialisied ... ');
        
        this.eventListener();        
        console.log(this);
    },
    
    eventListener : function(){
        console.log("== Event Listener started ...");
        
        $(document).on('mousemove', function(event){ fire.EVENT_LISTENER_MOUSE(event) });        
        $(document).on('mousedown', function(event){ fire.CREATE_FIRE_ELEMENT(event) }); 
    },
    
    EVENT_LISTENER_MOUSE : function(event){
        var debug = "MouseX "+event.pageX+"     MouseY "+event.pageY;        
        $(fire.data.debug.mouse).html(debug);
    },
    
    CREATE_FIRE_ELEMENT : function(event){
        var x = event.pageX;
        var y = event.pageY;
        
        var element = $('<div></div>');
        element.addClass('fire');
        element.addClass('boom');
        element.attr('style', "top:"+y+"px; left:"+x+"px");
        
        $(fire.data.map.data).append(element);
        this.UPDATE_FIRE_COUNT();
    },
    
    UPDATE_FIRE_COUNT : function(){ 
        var c = fire.data.debug.firecount++;
        $(fire.data.debug.fire).html("Fire Elements Count: "+c);
    }
    
}

fire.init();