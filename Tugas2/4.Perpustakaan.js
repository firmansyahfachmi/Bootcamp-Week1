let books = [
    {
        id : 1,
        bookName : "Seni Minimalis",
        status : "Dipinjam"
    },
    {
        id : 2,
        bookName : "Teman Berjuang",
        status : "Tersedia"
    },
    {
        id : 3,
        bookName: "The Clash",
        status: "Tersedia"
    }
    
]

function getInfo(b_Name){
    console.log("Info buku berdasarkan judul buku :");
    for (let i in books) {
        if (books[i].bookName == b_Name) {
            console.log("Judul Buku : " +books[i].bookName + " | Status Buku : " + books[i].status);
            break;
        }
    }
    console.log();

}

function getStatus(b_Status) {
    console.log("Info buku berdasarkan status buku :");
    for(let i in books){
        if(books[i].status == b_Status){
            
            console.log("Judul Buku : " + books[i].bookName + " | Status Buku : " + books[i].status);
            
        }
    }
    
    
}

/* Menampilkan info buku melalui judul buku */
getInfo("Seni Minimalis");

/* Menampilkan info buku melalui status buku */
getStatus("Tersedia");