function differentCount(s,n)
{
    return (s.charAt(0) == s.charAt(s.length - 1));
}
  
function countDifferentEnds(s) {
    
    var result = 0;
    var n = s.length;
  
    for (var i = 0; i < n; i++)   
       for (var len = 1; len <= n-i; len++)            
          if (! differentCount(s.substring(i, i + len)))
            result++;
  
    return result;
} 
 
    var s = "10201";
    var n = s.length;
    document.write(countDifferentEnds(s,n));
 
