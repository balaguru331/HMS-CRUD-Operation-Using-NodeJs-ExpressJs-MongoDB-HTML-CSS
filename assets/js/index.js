//ADD_USER PAGE

$("#add_user").submit(function(event){
    alert("Data Inserted Successfully")
})

//UPDATE USER PAGE

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array= $(this).serializeArray();
    var data={}

    $.map(unindexed_array,function(n,i){
        data[n['name']]=n['value']
    })

    console.log(data);

    var request = {
        "url" : `http://localhost:3000/api/users/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Data added Successfully...")
        location.reload()
    })
})

//DELETE Patient information

if(window.location.pathname == "/index"){
    $ondelete = $(".tabel tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/users/${id}`,
            "method": "DELETE"
        }

        if(confirm("Do you Really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully...");
                location.reload()
        })
    }
    })
}


/* *****************************************************************************/
/************** Login New User***************** */

$("#new_user").submit(function(event){
    alert("User Registered Successfullly")
})



/* *****************************************************************************/
/************** Staffs Entry***************** */

$("#staff_entry").submit(function(event){
    alert("Staff Entered Successfully")
})


/* *****************************************************************************/
/************** Staff Details update***************** */

$("#staff_update").submit(function(event){
    event.preventDefault();

    var unindexed_array= $(this).serializeArray();
    var data={}

    $.map(unindexed_array,function(n,i){
        data[n['name']]=n['value']
    })

    console.log(data);

    var request = {
        "url" : `http://localhost:3000/api/staff/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
       alert("Data added Successfully...")
        location.reload()
    })
})


/* *****************************************************************************/
/************** Staff Detail Delete***************** */

if(window.location.pathname == "/staff_view"){
    $ondelete = $(".tabel tbody td a.deletestaff");
    $ondelete.click(function(){
        var id = $(this).attr("staff-id")

        var request = {
            "url" : `http://localhost:3000/api/staff/${id}`,
            "method": "DELETE"
        }

        if(confirm("Do you Really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully...");
                location.reload()
        })
    }
    })
}



/* *****************************************************************************/
/************** BOOKING page***************** */
$("#book-app").submit(function(event){
    if(confirm("Do you Really want to Book your appointment?")){
        alert("Booking Successfully...");
        location.reload()
    }

})

$("#car-book").submit(function(event){
    if(confirm("Do you Really want to Book your appointment?")){
        alert("Booking Successfully...");
        location.reload()
    }

})

$("#gas-book").submit(function(event){
    if(confirm("Do you Really want to Book your appointment?")){
        alert("Booking Successfully...");
        location.reload()
    }

})

$("#uro-book").submit(function(event){
    if(confirm("Do you Really want to Book your appointment?")){
        alert("Booking Successfully...");
        location.reload()
    }

})

$("#onc-book").submit(function(event){
    if(confirm("Do you Really want to Book your appointment?")){
        alert("Booking Successfully...");
        location.reload()
    }

})

$("#neu-book").submit(function(event){
    if(confirm("Do you Really want to Book your appointment?")){
        alert("Booking Successfully...");
        location.reload()
    }

})