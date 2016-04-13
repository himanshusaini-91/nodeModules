var flight=require("./flightcheck");
function fb()
{
    if(flight(20))
    {
        return "flight is booked";
    }
    else
    {
        return "flight is cancel";
    }
}
module.exports=fb;
