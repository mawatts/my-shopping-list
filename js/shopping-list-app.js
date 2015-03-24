$(document).ready(function() {
	addItemToList();
	addCategoryToList();
	removeRows();
	markCheckbox();
});

function addItemToList() {
  	$('#addItem').click(function() {
		//Get Value of Textbox
		var selectedCategory = $('#categoryOptions').val();
		var itemValue = $('#input').val();
		$('<li class="item"><div class="checkbox"></div><span class="item-name">'+itemValue+'</span><img class="remove" src="images/close-icon.png" alt="X"></li>').insertAfter('[id='+selectedCategory+']');
	});
}

function addCategoryToList() {
  	$('#addCategory').click(function() {
		//Get Value of Textbox
		var catValue = $('#input').val();
		$('ul').append('<li class="category" id="'+catValue+'"><span class="category-name">'+catValue+'</span><img class="remove" src="images/close-icon.png" alt="X"></li>');
		$('#categoryOptions').append('<option id="'+catValue+'">'+catValue+'</option>')
	});
}

function removeRows() {
	//delete list items from ul
	$('.list').on('click', '.remove', function(e){e.preventDefault(); $(this).parent().remove()});
}

function markCheckbox() {
	//cross off list items
	$('.list').on('click', 'li', function(){$(this).toggleClass('strikeThrough'); $(this).children('.checkbox').toggleClass('checked');});
}