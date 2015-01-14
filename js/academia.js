 var teste = false; 
$(document).ready(function() {
    $('#registrationForm')
        // IMPORTANT: You must declare .on('init.field.bv')
        // before calling .bootstrapValidator(options)
        .on('init.field.bv', function(e, data) {
            // data.bv      --> The BootstrapValidator instance
            // data.field   --> The field name
            // data.element --> The field element

            var $parent    = data.element.parents('.form-group'),
                $icon      = $parent.find('.form-control-feedback[data-bv-icon-for="' + data.field + '"]'),
                options    = data.bv.getOptions(),                      // Entire options
                validators = data.bv.getOptions(data.field).validators; // The field validators

            if (validators.notEmpty && options.feedbackIcons && options.feedbackIcons.required) {
                // The field uses notEmpty validator
                // Add required icon
                $icon.addClass(options.feedbackIcons.required).show();
            }
        })
        .bootstrapValidator({
            feedbackIcons: {
                required: 'glyphicon glyphicon-asterisk',
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                email: {
                    validators: {
                        notEmpty: {
                        },
                        emailAddress: {
                        }
                    }
                },
                name: {
                    validators: {
                        notEmpty: {
                        },
                        stringLength: {
                            min: 4
                        }                    
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                        },
                        stringLength: {
                            min: 8
                        },
                        different: {
                            field: "email"
                        }
                    }
                },
                confirmPassword: {
                    validators: {
                        notEmpty: {
                        },
                        stringLength: {
                            min: 8
                        },
                        identical: {
                            field: "password"
                        }
                    }
                }
            }
        })
        .on('error.validator.bv', function(e, data) {
            // $(e.target)    --> The field element
            // data.bv        --> The BootstrapValidator instance
            // data.field     --> The field name
            // data.element   --> The field element
            // data.validator --> The current validator name

            data.element
                .data('bv.messages')
                // Hide all the messages
                .find('.help-block[data-bv-for="' + data.field + '"]').hide()
                // Show only message associated with current validator
                .filter('[data-bv-validator="' + data.validator + '"]').show();
        })
        .on('success.field.bv', function(e, data) {
            // e, data parameters are the same as in error.field.bv event handler
            // Despite that the field is valid, by default, the submit button will be disabled if all the following conditions meet
            // - The submit button is clicked
            // - The form is invalid
            if (data.bv.isValid()) {
                data.bv.disableSubmitButtons(false);
            } else {
                data.bv.disableSubmitButtons(true);
            }
            
        });
    
    $('#loginForm')
        // IMPORTANT: You must declare .on('init.field.bv')
        // before calling .bootstrapValidator(options)
        .on('init.field.bv', function(e, data) {
            // data.bv      --> The BootstrapValidator instance
            // data.field   --> The field name
            // data.element --> The field element

            var $parent    = data.element.parents('.form-group'),
                $icon      = $parent.find('.form-control-feedback[data-bv-icon-for="' + data.field + '"]'),
                options    = data.bv.getOptions(),                      // Entire options
                validators = data.bv.getOptions(data.field).validators; // The field validators

            if (validators.notEmpty && options.feedbackIcons && options.feedbackIcons.required) {
                // The field uses notEmpty validator
                // Add required icon
                $icon.addClass(options.feedbackIcons.required).show();
            }
        })
        .bootstrapValidator({
            feedbackIcons: {
                required: 'glyphicon glyphicon-asterisk',
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                email: {
                    validators: {
                        notEmpty: {
                        },
                        emailAddress: {
                        }
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                        },
                        stringLength: {
                            min: 8
                        }
                    }
                }
            }
        })
        .on('error.validator.bv', function(e, data) {
            // $(e.target)    --> The field element
            // data.bv        --> The BootstrapValidator instance
            // data.field     --> The field name
            // data.element   --> The field element
            // data.validator --> The current validator name

            data.element
                .data('bv.messages')
                // Hide all the messages
                .find('.help-block[data-bv-for="' + data.field + '"]').hide()
                // Show only message associated with current validator
                .filter('[data-bv-validator="' + data.validator + '"]').show();
        })
        .on('success.field.bv', function(e, data) {
            // e, data parameters are the same as in error.field.bv event handler
            // Despite that the field is valid, by default, the submit button will be disabled if all the following conditions meet
            // - The submit button is clicked
            // - The form is invalid
            if (data.bv.isValid()) {
                data.bv.disableSubmitButtons(false);
            } else {
                data.bv.disableSubmitButtons(true);
            }
            
        });
    
    $('#contactForm')
        // IMPORTANT: You must declare .on('init.field.bv')
        // before calling .bootstrapValidator(options)
        .on('init.field.bv', function(e, data) {
            // data.bv      --> The BootstrapValidator instance
            // data.field   --> The field name
            // data.element --> The field element

            var $parent    = data.element.parents('.form-group'),
                $icon      = $parent.find('.form-control-feedback[data-bv-icon-for="' + data.field + '"]'),
                options    = data.bv.getOptions(),                      // Entire options
                validators = data.bv.getOptions(data.field).validators; // The field validators

            if (validators.notEmpty && options.feedbackIcons && options.feedbackIcons.required) {
                // The field uses notEmpty validator
                // Add required icon
                $icon.addClass(options.feedbackIcons.required).show();
            }
        })
        .bootstrapValidator({
            feedbackIcons: {
                required: 'glyphicon glyphicon-asterisk',
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                name: {
                    validators: {
                        notEmpty: {
                        },
                        stringLength: {
                            min: 4
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                        },
                        emailAddress: {
                        }
                    }
                },
                message: {
                    validators: {
                        notEmpty: {
                        }
                    }
                }
            }
        })
        .on('error.validator.bv', function(e, data) {
            // $(e.target)    --> The field element
            // data.bv        --> The BootstrapValidator instance
            // data.field     --> The field name
            // data.element   --> The field element
            // data.validator --> The current validator name

            data.element
                .data('bv.messages')
                // Hide all the messages
                .find('.help-block[data-bv-for="' + data.field + '"]').hide()
                // Show only message associated with current validator
                .filter('[data-bv-validator="' + data.validator + '"]').show();
        })
        .on('success.field.bv', function(e, data) {
            // e, data parameters are the same as in error.field.bv event handler
            // Despite that the field is valid, by default, the submit button will be disabled if all the following conditions meet
            // - The submit button is clicked
            // - The form is invalid
            if (data.bv.isValid()) {
                data.bv.disableSubmitButtons(false);
            } else {
                data.bv.disableSubmitButtons(true);
            }
            
        });
       
    $('#contactForm').submit(function(evt){
        test=false;
        $('#sendingMessageModal').modal('show');
        evt.preventDefault();
        setTimeout(function(){ 
            $('#sendingMessageModal').modal('hide');
            if (test==false){
            $('#messageSentModal').modal('show');
            }
        }, 1000);
    });
     
    $('#registrationForm').submit(function(evt){
        $('#cadastroModal').modal('hide');
        $('#cadastroSuccess').modal('show');
        evt.preventDefault();
    });
});

function clearMessageForm() {
    $('#contactForm').data('bootstrapValidator').resetForm();
    document.getElementById("contactForm").reset();
    document.getElementById("sendMessage").disabled=true;
    $('#messageSentModal').modal('hide');
}

function cancel() {
    test=true;
}
