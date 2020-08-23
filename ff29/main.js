Node.prototype.getSiblings = function(){
    var allChildren  = this.parentNode.children
     var array = {length:0}
      for (let i=0;i<allChildren.length;i++){
        if(allChildren[i] !== this){
          array[array.length] = allChildren[i]
          array.length += 1
        }
       
      return array
    }
}
Node.prototype.addClass = function(classes){
    classes.forEach( (value)=>this.classList.add(value) )
}
console.log(item3.getSiblings())

item3.getSiblings()
// item3.getSiblings.call(item3)

item3.addClass(['a','b','c'])
// item3.getSiblings.call(item3,['a','b','c'])