let url = 'https://www.anapioficeandfire.com/api/books'
let bodyy = document.querySelector(".row");

async function booksapi(){
    try{
        let fetchs = await fetch(url)
        let result = await fetchs.json()
        for (let i = 0; i < result.length; i++) {
            var create_div = document.createElement("div");
            create_div.classList.add("col-md-4");
            create_div.classList.add("col-sm-6");
            create_div.classList.add("col-xl-4");
            create_div.innerHTML = `
            <div class="card-deck">
                <div class="card h-100">
                    <div class="card-header bg-info" id="header">
                        <H3 id="title" class="text-center">${result[i].name}</H3>
                     </div>
                     <div class="card-body" >
                         <div class="card-text text-center">
                             <img class="img card-img-top" src="bookimg.jpeg" alt="image">
                             <p> Author: ${result[i].authors}</p>
                             <p>Country: ${result[i].country}</p>
                             <p>Media type: ${result[i].mediaType}</p>
                             <p>Number of pages: ${result[i].numberOfPages}</p>
                         </div>
                     </div> 
                     <div class="card-footer" >
                         <div>
                            <button class="btn btn-primary text-center">Buy now</button>
                         </div>
                          
                     </div>
                </div>
             </div>`;
            bodyy.append(create_div);
          }
        } catch (err) {
          console.log( err);
        }
      }
booksapi()