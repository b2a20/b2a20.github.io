// Gets converted to _W
Weebly = window.Weebly || {};
Weebly.templates = {
		'membership/login-signup': "{{!\n\tNOTES:\n\t- The login-section class is used to show\/hide this section\n\t- The signup-link class is used to toggle to the signup-section\n\t- The signup-section class is used to show\/hide this section\n\t- The login-link class is used to toggle to the login-section\n}}\n\n<div class=\"wsite-membership-box\">\n\n\t<div class=\"login-section\">\n\t\t<h1 class=\"login-title\">\n\t\t\t{{#stl}}javascript.membership.login-signup_1{{\/stl}}\n\t\t\t{{#allow_signup}}\n\t\t\t\t|\n\t\t\t\t<a href=\"javascript:;\" class=\"signup-link\">{{#stl}}javascript.membership.login-signup_2{{\/stl}}<\/a>\n\t\t\t{{\/allow_signup}}\n\t\t<\/h1>\n\t\t{{> membership\/login-form}}\n\t<\/div>\n\n\t{{#allow_signup}}\n\t\t<div class=\"signup-section\" style=\"display: none\">\n\t\t\t<h1 class=\"signup-title\">\n\t\t\t\t<a href=\"javascript:;\" class=\"login-link\">{{#stl}}javascript.membership.login-signup_3{{\/stl}}<\/a>\n\t\t\t\t|\n\t\t\t\t{{#stl}}javascript.membership.login-signup_4{{\/stl}}\n\t\t\t<\/h1>\n\t\t\t{{> membership\/signup-form}}\n\t\t<\/div>\n\t{{\/allow_signup}}\n<\/div>",
		'membership/login-form': "{{! Designer Note: The id is used for form submission }}\n<form id=\"membership-login-form\" method=\"post\" action=\"\">\n\t{{#allow_signup}}<div class=\"caret caret-login\"><\/div>{{\/allow_signup}}\n\t<input name=\"login-email\" type=\"text\" class=\"wsite-page-membership-text-input large login-email\" placeholder=\"{{#esc_attr}}{{#stl}}javascript.membership.login-form_1{{\/stl}}{{\/esc_attr}}\" \/>\n\t<input name=\"login-password\" type=\"password\" class=\"wsite-page-membership-text-input large login-password\" placeholder=\"{{#esc_attr}}{{#stl}}javascript.membership.login-form_2{{\/stl}}{{\/esc_attr}}\" \/>\n\t{{! Designer Note: The login-error class is used to display errors }}\n\t<p class=\"login-error error message\"><\/p>\n\n\t<input class=\"redirect\" type=\"hidden\"{{#redirect}} value=\"{{{redirect}}}\"{{\/redirect}}><\/input>\n\t{{! Designer Note: The reset-password class is used for password reset }}\n\t<a class=\"membership-left-action reset-password\" href=\"\/apps\/member\/reset_password\">{{#stl}}javascript.membership.login-form_3{{\/stl}}<\/a>\n\t<button data-formId=\"membership-login-form\" class=\"btn-com btn-info membership-right-action btn-forward\">{{#stl}}javascript.membership.login-form_4{{\/stl}}<\/button>\n<\/form>",
		'membership/signup-form': "<form id=\"membership-signup-form\" method=\"post\" action=\"\">\n\t<div class=\"caret caret-signup\"><\/div>\n\t<input name=\"signup-name\" type=\"text\" class=\"wsite-page-membership-text-input large signup-name\" placeholder=\"{{#esc_attr}}{{#stl}}javascript.membership.signup-form_1{{\/stl}}{{\/esc_attr}}\" \/>\n\t<input name=\"signup-email\" type=\"text\" class=\"wsite-page-membership-text-input large signup-email\" placeholder=\"{{#esc_attr}}{{#stl}}javascript.membership.signup-form_2{{\/stl}}{{\/esc_attr}}\" \/>\n\t<input name=\"signup-password\" type=\"password\" class=\"wsite-page-membership-text-input large signup-password\" placeholder=\"{{#esc_attr}}{{#stl}}javascript.membership.signup-form_3{{\/stl}}{{\/esc_attr}}\" \/>\n\t<label class=\"signup-consent__label\">\n\t\t<input name=\"signup-consent\" type=\"checkbox\" class=\"wsite-page-membership-checkbox-input signup-consent\" value=\"true\" \/>\n\t\t{{#stl}}templates.platform.theme.core.membership.signup-form_5{{\/stl}} <span class=\"signup-consent__required\">*<\/span>\n\t<\/label>\n\n\t{{! Designer Note: The signup-error class is used to display errors }}\n\t<p class=\"signup-error error message\"><\/p>\n\n\t<button disabled data-formId=\"membership-signup-form\" class=\"btn-com membership-right-action btn-forward register\">{{#stl}}javascript.membership.signup-form_4{{\/stl}}<\/button>\n<\/form>\n<input class=\"redirect\" type=\"hidden\"{{#redirect}} value=\"{{{redirect}}}\"{{\/redirect}}><\/input>\n{{! Designer Note: The signup-response-message class is used to display the success on signup message }}\n<p class=\"signup-response-message\" style=\"display: none\"><\/p>\n{{! Designer Note: The button-area class is used to append a button after signing up }}\n<div class=\"button-area\"><\/div>\n",
		'membership/reset-password': "<div class=\"wsite-membership-box\">\n\t<h1>{{#stl}}javascript.membership.reset-password_1{{\/stl}}<\/h1>\n\n\t{{> membership\/reset-password-form}}\n<\/div>\n",
		'membership/reset-password-form': "<div class=\"form\">\n\t{{#ask_email}}\n\t\t{{! Designer Note: The id is used to hide this form after successful submission }}\n\t\t<form method=\"GET\" action=\"\" id=\"membership-email-form\">\n\t\t\t<p>{{#stl}}javascript.membership.reset-password-form_1{{\/stl}}<\/p>\n\n\t\t\t<input type=\"text\" name=\"email\" class=\"wsite-page-membership-text-input large email\" placeholder=\"{{#esc_attr}}{{#stl}}javascript.membership.reset-password-form_2{{\/stl}}{{\/esc_attr}}\" \/>\n\n\t\t\t{{#invalid_email}}\n\t\t\t\t<p class=\"membership-error\">{{#stl}}javascript.membership.reset-password-form_3{{\/stl}}<\/p>\n\t\t\t{{\/invalid_email}}\n\n\t\t\t{{#no_password}}\n\t\t\t\t<p class=\"membership-error\">{{#stl}}javascript.membership.reset-password-form_4{{\/stl}}<\/p>\n\t\t\t{{\/no_password}}\n\n\t\t\t{{! Designer Note: When the class email-submit is clicked the form is submited }}\n\t\t\t<button class=\"btn-com btn-info membership-right-action btn-forward membership-form-submit email-submit\" data-formId=\"membership-reset-form\">{{#stl}}javascript.membership.reset-password-form_5{{\/stl}}<\/button>\n\t\t<\/form>\n\t{{\/ask_email}}\n\n\t{{#have_email}}\n\t\t<form method=\"GET\" id=\"membership-reset-form\">\n\t\t\t<p>{{#stl}}templates.platform.theme.core.membership.reset-password-form_11{{\/stl}}<\/p>\n\t\t\t<input name=\"password\" type=\"password\" class=\"wsite-page-membership-text-input large password\" placeholder=\"{{#esc_attr}}{{#stl}}templates.platform.theme.core.membership.reset-password-form_12{{\/stl}}{{\/esc_attr}}\" \/>\n\t\t\t<input name=\"password2\" type=\"password\" class=\"wsite-page-membership-text-input large password-confirmation\" placeholder=\"{{#esc_attr}}{{#stl}}templates.platform.theme.core.membership.reset-password-form_13{{\/stl}}{{\/esc_attr}}\" \/>\n\t\t\t<input type=\"hidden\" name=\"access_token\" value=\"{{#esc_attr}}{{access_token}}{{\/esc_attr}}\" class=\"access-token\" \/>\n\n\t\t\t{{! Designer Note: The error class is used to display errors }}\n\t\t\t<p class=\"membership-error error message\"><\/p>\n\n\t\t\t{{! Designer Note: When the class reset-submit is clicked the form is submited }}\n\t\t\t<button class=\"btn-com btn-info membership-right-action btn-forward membership-form-submit reset-submit\" data-formId=\"membership-reset-form\" disabled>{{#stl}}templates.platform.theme.core.membership.reset-password-form_14{{\/stl}}<\/button>\n\t\t<\/form>\n\t{{\/have_email}}\n\n\t{{#invalid_token}}\n\t\t<p class=\"membership-reset-padded\">{{#stl}}javascript.membership.reset-password-form_10{{\/stl}}<\/p>\n\t{{\/invalid_token}}\n<\/div>\n\n{{! Designer Note: The message class is used to display responses from the server }}\n<p class=\"message membership-reset-padded\" style=\"display: none;\"><\/p>\n{{! Designer Note: The button-area class is used to append a button after submitting an email }}\n<div class=\"button-area\"><\/div>",
		'membership/denied': "<div class=\"wsite-membership-box access-denied\">\n\t<h1>{{#stl}}javascript.membership.denied_1{{\/stl}}<\/h1>\n\t<p>{{#stl}}javascript.membership.denied_2{{\/stl}}<\/p>\n\t<p>{{{logoutUrl}}}<\/p>\n<\/div>\n",
		'membership/account': "<div class=\"wsite-membership-box member-account\">\n\t<h1>{{#stl}}templates.platform.theme.base.membership.account_5{{\/stl}}<\/h1>\n\n\t{{#has_pages}}\n\t\t{{#is_owner}}\n\t\t\t<h3 style=\"text-align: center;\">\n\t\t\t\t{{#stl}}javascript.membership.account_1{{\/stl}}\n\t\t\t<\/h3>\n\t\t{{\/is_owner}}\n\t\t{{^is_owner}}\n\t\t\t<h3 style=\"margin-bottom: 15px; color: #8e8e8e;\">\n\t\t\t\t{{#stl}}javascript.membership.account_2{{\/stl}}\n\t\t\t<\/h3>\n\t\t\t<div class=\"accessible-pages\">\n\t\t\t\t<table class=\"entity-list\" cellspacing=\"0\">\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t{{#accessible_pages}}\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class=\"accessible-page\" width=\"100%\"><a href=\"{{url}}\">{{{title}}}<\/a><\/td>\n\t\t\t\t\t\t\t<\/tr>\n\t\t\t\t\t\t{{\/accessible_pages}}\n\t\t\t\t\t<\/tbody>\n\t\t\t\t<\/table>\n\t\t\t<\/div>\n\t\t{{\/is_owner}}\n\t{{\/has_pages}}\n\t{{^has_pages}}\n\t\t<h3 style=\"text-align: center;\">\n\t\t\t{{#stl}}javascript.membership.account_3{{\/stl}}\n\t\t<\/h3>\n\t{{\/has_pages}}\n\n\t<a class=\"logout-link\" href=\"\/apps\/member\/logout\">\n\t\t{{#stl}}javascript.membership.account_4{{\/stl}}\n\t<\/a>\n<\/div>",
		'search/filter/search-facet-color': "<li class=\"wsite-search-facet wsite-search-facet-color\">\n\t<h3>{{facet_name}}<\/h3>\n\t<form name=\"{{column_name}}\">\n\t\t<ul class=\"wsite-search-facet-entries clearfix\">\n\t\t\t{{#facet_entries}}\n\t\t\t\t<li>\n\t\t\t\t\t<label title=\"{{name}}\" style=\"background-color:{{display_value}};\" {{#active}}class=\"active\"{{\/active}}>\n\t\t\t\t\t\t<input type=\"checkbox\" class=\"w-input-offscreen\" name=\"{{filter_text}}\" value=\"1\" tabindex=\"-1\" \/>\n\t\t\t\t\t<\/label>\n\t\t\t\t<\/li>\n\t\t\t{{\/facet_entries}}\n\t\t<\/ul>\n\t<\/form>\n<\/li>\n",
		'search/filter/search-facet-checkbox': "<li class=\"wsite-search-facet wsite-search-facet-checkbox\">\n\t<h3>{{facet_name}}<\/h3>\n\t<form name=\"{{column_name}}\">\n\t\t<ul class=\"wsite-search-facet-entries\">\n\t\t\t{{#facet_entries}}\n\t\t\t\t<li>\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type=\"checkbox\" name=\"{{filter_text}}\" value=\"1\" \/><!--\n\t\t\t\t\t\t{{! Commenting 'hack' to remove spaces }}\n\t\t\t\t\t\t--><a> {{! These aren't real links, used to use theme colors }}\n\t\t\t\t\t\t\t{{display_value}}\n\t\t\t\t\t\t\t<span class=\"count\">(<span class=\"count-inner\">{{count}}<\/span>)<\/span>\n\t\t\t\t\t\t<\/a>\n\t\t\t\t\t<\/label>\n\t\t\t\t<\/li>\n\t\t\t{{\/facet_entries}}\n\t\t<\/ul>\n\t<\/form>\n<\/li>\n",
		'search/filter/search-facet-price': "<li class=\"wsite-search-facet wsite-search-facet-price\">\n\t<h3>{{#stl}}templates.platform.theme.core.search.filter.search-facet-price_2{{\/stl}}<\/h3>\n\t<form name=\"{{column_name}}\">\n\t\t<input type=\"text\" class=\"wsite-form-input\" name=\"lowprice\" pattern=\"[0-9]*\" placeholder=\"&mdash;\" value=\"{{lowprice}}\" \/><!--\n\t\t{{! Commenting 'hack' to get inline-block to not have spaces }}\n\t\t--><span>{{#stl}}templates.platform.theme.core.search.filter.search-facet-price_3{{\/stl}}<\/span><!--\n\t\t{{! Commenting 'hack' to get inline-block to not have spaces }}\n\t\t--><input type=\"text\" class=\"wsite-form-input\" name=\"highprice\" pattern=\"[0-9]*\" placeholder=\"&mdash;\" value=\"{{highprice}}\" \/>\n\t<\/form>\n<\/li>\n",
		'search/filter/search-facet-availability': "<li class=\"wsite-search-facet wsite-search-facet-availability\">\n\t<h3>{{#stl}}templates.platform.theme.core.search.filter.search-facet-availability_1{{\/stl}}<\/h3>\n\t<form name=\"availability-facet\">\n\t\t<ul class=\"wsite-search-facet-entries\">\n\t\t\t<li>\n\t\t\t\t<label>\n\t\t\t\t\t<input type=\"checkbox\" name=\"outofstock\" value=\"1\" \/><!--\n\t\t\t\t\t{{! Commenting 'hack' to remove spaces }}\n\t\t\t\t\t--><a> {{! These aren't real links, used to use theme colors }}\n\t\t\t\t\t\t{{#stl}}templates.platform.theme.core.search.filter.search-facet-availability_2{{\/stl}}\n\t\t\t\t\t<\/a>\n\t\t\t\t<\/label>\n\t\t\t<\/li>\n\t\t<\/ul>\n\t<\/form>\n<\/li>\n",
		'search/filter/search-filter': "<li class=\"wsite-search-filter\">\n\t<h3>{{filter_name}}<\/h3>\n\t<ul class=\"wsite-search-filter-entries\">\n\t\t{{#filters}}\n\t\t\t<li style=\"{{style}}\">\n\t\t\t\t<a data-filter=\"{{filter_data}}\" href=\"{{url}}{{query_string}}\" {{#active}}class=\"active\"{{\/active}}>\n\t\t\t\t\t{{filter_name}}\n\t\t\t\t\t<span class=\"count\">(<span class=\"count-inner\">{{count}}<\/span>)<\/span>\n\t\t\t\t<\/a>\n\t\t\t<\/li>\n\t\t{{\/filters}}\n\t<\/ul>\n<\/li>\n",
		'search/filter/search-filters': "<ul id=\"wsite-search-sidebar\">\n\t{{#filters}}\n\t\t{{{.}}}\n\t{{\/filters}}\n\t{{#facets}}\n\t\t{{{.}}}\n\t{{\/facets}}\n<\/ul>\n",
		'search/search-results-list-items': "{{#has_product_results}}\n\t{{> search\/results\/product-group}}\n{{\/has_product_results}}\n\n{{#page_results}}\n\t{{> search\/results\/normal}}\n{{\/page_results}}\n\n{{#no_results}}\n\t{{> search\/results\/empty}}\n{{\/no_results}}\n\n{{#error_result}}\n\t{{> search\/results\/error}}\n{{\/error_result}}\n",
		'search/results/product-group': "<li id=\"wsite-search-product-result-section\">\n\t<h3>{{#stl}}templates.platform.theme.base.search.results.product-group_1{{\/stl}}<\/h3>\n\t<ul id=\"wsite-search-product-results\" class=\"clearfix\">\n\t\t{{#products}}\n\t\t\t{{> search\/results\/product}}\n\t\t{{\/products}}\n\t<\/ul>\n<\/li>",
		'search/results/product': "<li class=\"wsite-search-product-result\">\n\t<a href=\"{{url}}\">\n\t\t<div class=\"wsite-search-product-image-container\" style=\"background-image:url({{image_url}})\" title=\"{{title}}\">\n\t\t\t{{#show_sale_banner}}\n\t\t\t\t<div class=\"search__image-sale-banner-wrapper\">\n\t\t\t\t\t<p class=\"search__image-sale-banner placeholder\">\n\t\t\t\t\t\t{{#stl}}ecommerce.common.on_sale{{\/stl}}\n\t\t\t\t\t<\/p>\n\t\t\t\t<\/div>\n\t\t\t\t<p class=\"search__image-sale-banner visible\">\n\t\t\t\t\t{{#stl}}ecommerce.common.on_sale{{\/stl}}\n\t\t\t\t<\/p>\n\t\t\t{{\/show_sale_banner}}\n\t\t<\/div>\n\t\t<span class=\"wsite-search-product-name\" title=\"{{title_html}}\">{{{title_html}}}<\/span>\n\t<\/a>\n\t<span class=\"wsite-search-product-price\">\n\t\t{{#high_price_number}}\n\t\t\t<span class=\"wsite-search-product-price-low\">\n\t\t\t\t{{{currency_html}}}{{low_price_number}}\n\t\t\t<\/span>\n\t\t\t -\n\t\t\t<span class=\"wsite-search-product-price-high\">\n\t\t\t\t{{{currency_html}}}{{high_price_number}}\n\t\t\t<\/span>\n\t\t{{\/high_price_number}}\n\t\t{{^high_price_number}}\n\t\t\t<span class=\"wsite-search-product-price-low\">\n\t\t\t\t{{{currency_html}}}{{low_price_number}}\n\t\t\t<\/span>\n\t\t{{\/high_price_number}}\n\t<\/span>\n\t{{#show_low_stock_badge}}\n\t\t<p class=\"search__low-stock-badge\">\n\t\t\t{{#stl}}ecommerce.common.low_stock{{\/stl}}\n\t\t<\/p>\n\t{{\/show_low_stock_badge}}\n\t{{#show_out_of_stock_badge}}\n\t\t<p class=\"search__out-of-stock-badge\">\n\t\t\t{{#stl}}ecommerce.common.out_of_stock{{\/stl}}\n\t\t<\/p>\n\t{{\/show_out_of_stock_badge}}\n<\/li>\n",
		'search/results/normal': "<li>\n\t<a href=\"{{url}}\">\n\t\t<h3>\n\t\t\t{{#title_html}}\n\t\t\t\t{{{title_html}}}\n\t\t\t{{\/title_html}}\n\t\t\t{{^title_html}}\n\t\t\t\t{{#stl}}templates.platform.theme.base.search.results.normal_1{{\/stl}}\n\t\t\t{{\/title_html}}\n\t\t<\/h3>\n\t<\/a>\n\t<p>{{{content_html}}}<\/p>\n<\/li>\n",
		'search/results/empty': "<li class=\"no-results\">\n\t<p>{{#stl}}templates.platform.theme.base.search.results.empty_1{{\/stl}}<\/p>\n<\/li>\n",
		'search/results/error': "<li class=\"no-results\">\n\t<p>{{#stl}}templates.platform.theme.base.search.results.error_1{{\/stl}}<\/p>\n<\/li>\n",
		'search/core-pagination-list': "<ol id=\"wsite-search-pagenav\">\n\t{{#pagination_items}}\n\t\t{{> search\/pagination-item}}\n\t{{\/pagination_items}}\n<\/ol>",
		'search/pagination-item': "{{!\n\tNOTE: if an ellipsis is being displayed, there won't be an anchor tag and only the label will be displayed.\n}}\n\n<li>\n\t{{#url}}\n\t\t<a\n\t\t\t{{#is_active}}class=\"active\"{{\/is_active}}\n\t\t\t{{#is_disabled}}class=\"disabled\"{{\/is_disabled}}\n\t\t\thref=\"{{url}}\"\n\t\t\t>\n\t{{\/url}}\n\n\t\t{{text}}\n\n\t{{#url}}\n\t\t<\/a>\n\t{{\/url}}\n<\/li>\n",
	'': null // handle the trailing comma
};
delete Weebly.templates[''];