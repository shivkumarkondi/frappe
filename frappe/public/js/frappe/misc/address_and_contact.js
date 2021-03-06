frappe.provide('frappe.geo')

$.extend(frappe.geo, {
	clear_address_and_contact: function(frm) {
		$(frm.fields_dict['address_html'].wrapper).html("");
		frm.fields_dict['contact_html'] && $(frm.fields_dict['contact_html'].wrapper).html("");
	},

	render_address_and_contact: function(frm) {
		// render address
		$(frm.fields_dict['address_html'].wrapper)
			.html(frappe.render_template("address_list",
				cur_frm.doc.__onload))
			.find(".btn-address").on("click", function() {
				frappe.new_doc("Address");
			});

		// render contact
		if(frm.fields_dict['contact_html']) {
			$(frm.fields_dict['contact_html'].wrapper)
				.html(frappe.render_template("contact_list",
					cur_frm.doc.__onload))
				.find(".btn-contact").on("click", function() {
					frappe.new_doc("Contact");
				}
			);
		}
	}
})