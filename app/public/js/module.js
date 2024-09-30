export function sidebarReaction(){

    $(document).ready(function() {
        $('.nav-used').click( function(e){
            e.preventDefault()

            var sectionOld = $('.nav-link.nav-used.actived').attr('data-tab')
            var sectionActual = $(this).attr('data-tab')

            $('.nav-link.nav-used.actived').removeClass('nav-used actived')
            $(this).addClass('nav-used actived')

            $("#"+sectionOld+"Content").hide()
            $("#"+sectionActual+"Content").show()
            
        })
    })

}