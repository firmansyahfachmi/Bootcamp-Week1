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
    for (let i in books) {
        if (books[i].bookName == b_Name) {
            console.log("Judul Buku : " +books[i].bookName + " | Status Buku : " + books[i].status);
            break;
        }
    }

}

function getStatus(b_Status) {
 
    for(let i in books){
        if(books[i].status == b_Status){
            console.log("Judul Buku : " + books[i].bookName + " | Status Buku : " + books[i].status);
        }
    }
    
}

/* Menampilkan Info Buku Melalui Judul Buku*/
//getInfo("Seni Minimalis");

getStatus("Tersedia");