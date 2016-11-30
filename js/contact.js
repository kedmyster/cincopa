$(document).ready(function () {
	function init_validations() {
		$("#contact.widget-contact").find("form").validate({
            rules: {
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                email: "Enter a valid email address"
            }
        });

		$("#contact.advanced").find("form").validate({
            rules: {
                name: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Enter your name",
                email: "Enter a valid email address"
            }
        });

        $("#contact").find("form").submit(function(e) {
            var $form, $result;
            $form = $(this);

            // Disable the postback
            e.preventDefault();

            // Validate form
            $result = $form.validate();

            if ($result.errorList.length === 0) {
                $.ajax({
                    type: $form.attr("method"),
                    url: $form.attr("action"),
                    data: $form.serialize(),
                    success: function(data) {
                        if (data.status == "success") {
                            $(".send-error").hide();
                            $(".send-success").show();
                            $("#contact.advanced").find("form").find(".cta").hide();

                            // Clear the form
                            $("input, textarea").val("");
                        }
                    },
                    error: function(event, jqxhr, settings, thrownError) {
                        $(".send-error").show();
                        $(".send-success").hide();
                        $("#contact.advanced").find("form").find(".cta").hide();
                    }
                });
            }
        });
	}

	function init_autosize() {
		$('textarea').on('keydown', autosize);

		function autosize() {
			var el = this;
			setTimeout(function () {
				el.style.cssText = 'height:auto;';
				el.style.cssText = 'height:' + el.scrollHeight + 'px';
			}, 0);
		}
	}

	function init() {
		init_validations();
		init_autosize();
	}

	init();
});