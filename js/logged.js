
$(document).ready(function() {
    var today=new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    today = dd+'/'+mm+'/'+yyyy;
    
    $('.projectForm')
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
                title: {
                    validators: {
                        notEmpty: {
                        },
                        stringLength: {
                            min: 4
                        } 
                    }
                },
                description: {
                    validators: {
                        notEmpty: {
                        },
                        stringLength: {
                            min: 10
                        } 
                    }
                },
                university: {
                    validators: {
                        notEmpty: {
                        }
                    }
                },
                knowledge: {
                    validators: {
                        notEmpty: {
                        }
                    }
                },
                valorBolsa: {
                    validators: {
                        notEmpty: {
                        },
                        numeric: {
                        }
                    }
                },
                dataInicio: {
                    validators: {
                        notEmpty: {
                        },
                        date: {
                            format: "DD/MM/YYYY",
                            min: today
                        },
                        callback: {
                            message: 'Data inicio deve ser menor que data final',
                            callback: function(value, validator) {
                                var dateEnd = validator.getFieldElements('dataFim').val();
                                if (dateEnd == '') {
                                    return true;
                                }
                                var sectionsEnd = dateEnd.split('/');
                                var sectionsBegin = validator.getFieldElements('dataInicio').val().split('/');

                                if (sectionsBegin[2] <= sectionsEnd[2]) {
                                    if (sectionsBegin[2] < sectionsEnd[2]) {
                                        return true;
                                    }
                                    if (sectionsBegin[1] <= sectionsEnd[1]) {
                                        if (sectionsBegin[1] < sectionsEnd[1]) {
                                            return true;
                                        }
                                        if (sectionsBegin[0] <= sectionsEnd[0]) {
                                            return true
                                        }
                                    }
                                }
                                validator.updateStatus('dataFim', 'VALID');
                                return false;
                            }
                        }
                    }
                },
                dataFim: {
                    validators: {
                        notEmpty: {
                        },
                        date: {
                            format: "DD/MM/YYYY",
                            min: today
                        },
                        callback: {
                            message: 'Data final deve ser maior que data inicial',
                            callback: function(value, validator) {
                                var dateBegin = validator.getFieldElements('dataInicio').val();
                                if (dateBegin == '') {
                                    return true;
                                }
                                var sectionsBegin = dateBegin.split('/');
                                var sectionsEnd = validator.getFieldElements('dataFim').val().split('/');

                                if (sectionsBegin[2] <= sectionsEnd[2]) {
                                    if (sectionsBegin[2] < sectionsEnd[2]) {
                                        return true;
                                    }
                                    if (sectionsBegin[1] <= sectionsEnd[1]) {
                                        if (sectionsBegin[1] < sectionsEnd[1]) {
                                            return true;
                                        }
                                        if (sectionsBegin[0] <= sectionsEnd[0]) {
                                            return true
                                        }
                                    }
                                } 
                                validator.updateStatus('dataInicio', 'VALID');
                                return false;
                            }
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
            data.bv.disableSubmitButtons(false);
            if (data.bv.isValid()) {
                data.bv.disableSubmitButtons(false);
            } else {
                data.bv.disableSubmitButtons(true);
            }
            
        });
    
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
                    }
                },
                nome: {
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
    $('#editUser').on('shown.bs.modal', function () {
        $("#registrationForm").data('bootstrapValidator').validateField('nome');
    });
    
    $('#registrationForm').submit(function(evt) {
        $('#editUser').modal('hide');
        $('#success').modal('show');
        evt.preventDefault();
    });
    
    $('.projectForm').submit(function(evt){
        $('.projectModal').modal('hide');
        $('#success').modal('show');
        evt.preventDefault();
    });
    
});

function cancelOp() {
    $('#success').modal('show');
}

function cancelOpF() {
    $('#cancel').modal('show');
}