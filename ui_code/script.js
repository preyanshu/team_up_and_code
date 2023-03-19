

for(let i=1;i<=40;i++)
{
for(let j=1;j<=40;j++)
{
   let block= document.createElement("div");
   block.setAttribute("class","item")
   block.setAttribute("id",`item${i}-${j}`);
   document.getElementById("grid_container").appendChild(block)

}

}
            for(let i=1;i<=256;i++)
            {

                document.getElementById(`item12-13`).style.backgroundColor="rgb(209, 157, 157)"
            }

  
    
