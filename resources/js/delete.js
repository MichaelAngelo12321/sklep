$(function(){
 
   $('.delete').click(function(){
        
        Swal.fire({
title: 'delete',
icon: 'warning',
showCancelButton: true,
confirmButtonText: 'TAK',
cancelButtonText: 'NIE'
}).then((result) => {
if (result.isConfirmed) {
$.ajax({
            method:"DELETE",
            url: deleteUrl +$(this).data("id")
            
        })
            .done(function (data){
                window.location.reload();
                    })
                
                        .fail(function (data){
                        Swal.fire({
                        icon: data.responseJSON.status,
                        title: 'Oops...',
                        text: data.responseJSON.message,
                        footer: '<a href="">Why do I have this issue?</a>'
                    })
                });

            } 
        })
    });
});