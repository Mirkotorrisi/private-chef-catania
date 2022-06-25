"use strict";(self.webpackChunkprivate_chef_catania=self.webpackChunkprivate_chef_catania||[]).push([[595],{4125:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(4414);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}));var o=r(6532);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})}));var i=r(8922);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})}))},9399:function(e,t,r){var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.NewsArticleJsonLd=t.BlogPostJsonLd=t.ArticleJsonLd=void 0;var o=n(r(7154)),i=n(r(6479)),a=n(r(9713)),c=n(r(7294)),u=r(9860);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=function(e){var t=e.url,r=e.headline,n=e.title,o=e.images,i=void 0===o?[]:o,a=e.datePublished,s=e.dateCreated,l=e.dateModified,f=void 0===l?a:l,p=e.authorType,b=void 0===p?"Person":p,y=e.authorName,O=e.description,v=e.publisherName,g=e.publisherLogo,m=e.body,j=e.overrides,h=e.keywords,P=e.speakable,w=e.defer,_=void 0!==w&&w,k=d({"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":t},headline:null!=r?r:n,image:i,datePublished:a,dateModified:f,dateCreated:s,author:{"@type":b,name:y},publisher:{"@type":"Organization",name:v,logo:{"@type":"ImageObject",url:g}},description:O,articleBody:m,speakable:P?P.map((function(e){return d({"@type":"SpeakableSpecification"},e)})):void 0,keywords:Array.isArray(h)?h.join(", "):h},j);return c.default.createElement(u.JsonLd,{defer:_,json:k})};t.ArticleJsonLd=l;t.BlogPostJsonLd=function(e){var t=e.overrides,r=e.defer,n=void 0!==r&&r,a=e.publisherLogo,u=void 0===a?"":a,s=e.publisherName,f=void 0===s?"":s,p=(0,i.default)(e,["overrides","defer","publisherLogo","publisherName"]);return c.default.createElement(l,(0,o.default)({defer:n,publisherName:f,publisherLogo:u},p,{overrides:d(d({},t),{},{"@type":"BlogPosting"})}))};t.NewsArticleJsonLd=function(e){var t=e.overrides,r=e.section,n=e.defer,a=void 0!==n&&n,u=(0,i.default)(e,["overrides","section","defer"]);return c.default.createElement(l,(0,o.default)({defer:a},u,{overrides:d(d({articleSection:r},t),{},{"@type":"NewsArticle"})}))}},203:function(e,t,r){var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.BlogJsonLd=void 0;var o=n(r(9713)),i=n(r(7294)),a=r(9860);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.BlogJsonLd=function(e){var t=e.url,r=e.headline,n=e.title,o=e.images,c=void 0===o?[]:o,s=e.datePublished,d=e.dateModified,l=void 0===d?null:d,f=e.authorName,p=e.authorType,b=void 0===p?"Person":p,y=e.keywords,O=e.description,v=e.publisherName,g=e.publisherLogo,m=e.posts,j=void 0===m?[]:m,h=e.issn,P=e.overrides,w=void 0===P?{}:P,_=e.defer,k=void 0!==_&&_,E=u({"@context":"https://schema.org","@type":"Blog",mainEntityOfPage:{"@type":"Blog","@id":t},headline:null!=r?r:n,keywords:y,issn:h,image:c,datePublished:s,dateModified:null!=l?l:s,description:O,author:f?{"@type":b,name:f}:void 0,publisher:v?{"@type":"Organization",name:v,logo:g?{"@type":"ImageObject",url:g}:void 0}:void 0,blogPost:j.map((function(e){return u({"@type":"BlogPosting"},e)}))},w);return i.default.createElement(a.JsonLd,{defer:k,json:E})}},2174:function(e,t,r){var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.BookJsonLd=void 0;var o=n(r(6479)),i=n(r(9713)),a=n(r(7294)),c=r(9860);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,i.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.BookJsonLd=function(e){var t=e.name,r=e.author,n=e.url,i=e.workExample,u=void 0===i?[]:i,d=e.id,l=e.sameAs,f=e.overrides,p=void 0===f?{}:f,b=e.defer,y=void 0!==b&&b,O=s({"@context":"https://schema.org","@type":"Book",name:t,url:n,"@id":d,sameAs:l,author:s({"@type":"Person"},r),workExample:u.map((function(e){var t,r=e.bookFormat,n=e.potentialAction,i=e.author,a=(0,o.default)(e,["bookFormat","potentialAction","author"]);return s(s({"@type":"Book",bookFormat:(t=r,t?"https://schema.org/".concat(t):void 0)},a),{},{person:s({"@type":"Person"},i),potentialAction:s({"@type":"ReadAction"},n)})}))},p);return a.default.createElement(c.JsonLd,{defer:y,json:O})}},8812:function(e,t,r){var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.BreadcrumbJsonLd=void 0;var o=n(r(9713)),i=n(r(7294)),a=r(9860);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.BreadcrumbJsonLd=function(e){var t=e.itemListElements,r=void 0===t?[]:t,n=e.overrides,u=void 0===n?{}:n,s=e.defer,d=void 0!==s&&s,l=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:r.map((function(e){return{"@type":"ListItem",position:e.position,item:{"@id":e.item,name:e.name,"@type":"Thing"}}}))},u);return i.default.createElement(a.JsonLd,{defer:d,json:l})}},3995:function(e,t,r){var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.CorporateContactJsonLd=void 0;var o=n(r(7294)),i=r(2323),a=function(e){return Array.isArray(e)?"[".concat(e.map((function(e){return'"'.concat(e,'"')})).toString(),"]"):'"'.concat(e,'"')};t.CorporateContactJsonLd=function(e){var t=e.url,r=e.logo,n=e.contactPoint,c=e.defer,u=void 0!==c&&c,s='{\n    "@context": "https://schema.org",\n    "@type": "Organization",\n    "url": "'.concat(t,'",\n    ').concat(r?'"logo": "'.concat(r,'",'):"",'\n    "contactPoint": [').concat(function(e){return e.map((function(e){return'{\n    "@type": "ContactPoint",\n    "telephone": "'.concat(e.telephone,'",\n    "contactType": "').concat(e.contactType,'"').concat(e.areaServed?',\n    "areaServed": '.concat(a(e.areaServed)):"").concat(e.availableLanguage?',\n    "availableLanguage": '.concat(a(e.availableLanguage)):"").concat(e.contactOption?',\n    "contactOption": "'.concat(e.contactOption.toString(),'"'):"","\n    }")}))}(n).toString(),"]\n  }");return o.default.createElement(i.Helmet,{defer:u},o.default.createElement("script",{type:"application/ld+json"},s))}},74:function(e,t,r){var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.CourseJsonLd=void 0;var o=n(r(9713)),i=n(r(7294)),a=r(9860);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.CourseJsonLd=function(e){var t=e.name,r=e.courseName,n=e.description,u=e.providerName,s=e.providerUrl,d=e.overrides,l=void 0===d?{}:d,f=e.defer,p=void 0!==f&&f,b=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"Course",name:null!=t?t:r,description:n,provider:u?{"@type":"Organization",name:u,sameAs:s}:void 0},l);return i.default.createElement(a.JsonLd,{defer:p,json:b})}},4953:function(e,t,r){var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.FAQJsonLd=void 0;var o=n(r(9713)),i=n(r(7294)),a=r(9860);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.FAQJsonLd=function(e){var t,r=e.questions,n=e.overrides,u=void 0===n?{}:n,s=e.defer,d=void 0!==s&&s,l=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"FAQPage",mainEntity:(t=r,t.map((function(e){var t=e.question;return{"@type":"Question",acceptedAnswer:{"@type":"Answer",text:e.answer},name:t}})))},u);return i.default.createElement(a.JsonLd,{defer:d,json:l})}},6532:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(9399);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}));var o=r(203);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})}));var i=r(2174);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})}));var a=r(8812);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})}));var c=r(3995);Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return c[e]}})}));var u=r(74);Object.keys(u).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}})}));var s=r(4953);Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}})}));var d=r(9860);Object.keys(d).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return d[e]}})}));var l=r(6833);Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})}));var f=r(5975);Object.keys(f).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return f[e]}})}));var p=r(18);Object.keys(p).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return p[e]}})}));var b=r(1650);Object.keys(b).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return b[e]}})}));var y=r(4538);Object.keys(y).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return y[e]}})}));var O=r(9756);Object.keys(O).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return O[e]}})}))},9860:function(e,t,r){var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.JsonLd=void 0;var o=n(r(7294)),i=r(2323);t.JsonLd=function(e){var t=e.defer,r=e.json;return o.default.createElement(i.Helmet,{defer:t},o.default.createElement("script",{type:"application/ld+json"},JSON.stringify(r,null,2)))}},6833:function(e,t,r){var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.LocalBusinessJsonLd=void 0;var o=n(r(9713)),i=n(r(6479)),a=n(r(7294)),c=r(9860);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d={Mon:"Monday",Tues:"Tuesday",Wed:"Wednesday",Thurs:"Thursday",Fri:"Friday",Sat:"Saturday",Sun:"Sunday"},l=function(e){var t;return"http://schema.org/".concat(null!==(t=d[e])&&void 0!==t?t:e)},f=function(e){return e?Array.isArray(e)?e.map(l):l(e):void 0},p=function(e){if(e)return Array.isArray(e)?e.map((function(e){var t=e.dayOfWeek,r=(0,i.default)(e,["dayOfWeek"]);return s({"@type":"OpeningHoursSpecification",dayOfWeek:f(t)},r)})):s(s({"@type":"OpeningHoursSpecification"},e),{},{dayOfWeek:f(e.dayOfWeek)})};t.LocalBusinessJsonLd=function(e){var t=e.type,r=e.id,n=e.name,o=e.description,i=e.url,u=e.telephone,d=e.address,l=e.geo,f=e.images,b=e.openingHours,y=e.rating,O=e.priceRange,v=e.overrides,g=void 0===v?{}:v,m=e.defer,j=void 0!==m&&m,h=s({"@context":"https://schema.org","@type":t,"@id":r,name:n,description:o,url:i,telephone:u,priceRange:O,image:f,geo:s({"@type":"GeoCoordinates"},l),address:s({"@type":"PostalAddress"},d),aggregateRating:y?s({"@type":"AggregateRating"},y):void 0,openingHoursSpecification:p(b)},g);return a.default.createElement(c.JsonLd,{defer:j,json:h})}},5975:function(e,t,r){var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.LogoJsonLd=void 0;var o=n(r(9713)),i=n(r(7294)),a=r(9860);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.LogoJsonLd=function(e){var t=e.url,r=e.logo,n=e.overrides,u=void 0===n?{}:n,s=e.defer,d=void 0!==s&&s,l=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"Organization",url:t,logo:r},u);return i.default.createElement(a.JsonLd,{defer:d,json:l})}},18:function(e,t,r){var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.ProductJsonLd=void 0;var o=n(r(6479)),i=n(r(9713)),a=n(r(7294)),c=r(9860);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,i.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d={Discontinued:"http://schema.org/Discontinued",InStock:"http://schema.org/InStock",InStoreOnly:"http://schema.org/InStoreOnly",LimitedAvailability:"http://schema.org/LimitedAvailability",OnlineOnly:"http://schema.org/OnlineOnly",OutOfStock:"http://schema.org/OutOfStock",PreOrder:"http://schema.org/PreOrder",PreSale:"http://schema.org/PreSale",SoldOut:"http://schema.org/SoldOut"},l={DamagedCondition:"http://schema.org/DamagedCondition",NewCondition:"http://schema.org/NewCondition",RefurbishedCondition:"http://schema.org/RefurbishedCondition",UsedCondition:"http://schema.org/UsedCondition"};t.ProductJsonLd=function(e){var t,r,n,i=e.name,u=e.productName,f=e.images,p=void 0===f?[]:f,b=e.description,y=e.sku,O=e.gtin12,v=e.gtin,g=e.gtin8,m=e.gtin13,j=e.gtin14,h=e.mpn,P=e.brand,w=e.reviews,_=void 0===w?[]:w,k=e.aggregateRating,E=e.offers,S=e.offersType,L=void 0===S?"Offer":S,D=e.overrides,J=void 0===D?{}:D,M=e.defer,A=void 0!==M&&M,x=s({"@context":"https://schema.org","@type":"Product",name:null!=i?i:u,image:p,sku:y,gtin:v,gtin8:g,gtin12:O,gtin13:m,gtin14:j,mpn:h,brand:P?{"@type":"Brand",name:P}:void 0,description:b,review:_.map((function(e){var t=e.reviewRating;return s(s({"@type":"Review"},(0,o.default)(e,["reviewRating"])),{},{reviewRating:s({"@type":"Rating"},t)})})),aggregateRating:k?s({"@type":"AggregateRating"},k):void 0,offers:E?s(s({"@type":L},E),{},{availability:(n=E.availability,n?d[n]:void 0),itemCondition:(r=E.itemCondition,r?l[r]:void 0),seller:E.seller?{"@type":null!==(t=E.seller.type)&&void 0!==t?t:"Organization",name:E.seller.name}:void 0}):void 0},J);return a.default.createElement(c.JsonLd,{defer:A,json:x})}},1650:function(e,t,r){var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.SitelinksSearchBoxJsonLd=void 0;var o=n(r(9713)),i=n(r(7294)),a=r(9860);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.SitelinksSearchBoxJsonLd=function(e){var t=e.url,r=e.searchHandlerQueryStringUrl,n=e.overrides,u=void 0===n?{}:n,s=e.defer,d=void 0!==s&&s,l=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"WebSite",url:t,potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:"".concat(r,"{search_term_string}")},"query-input":"required name=search_term_string"}},u);return i.default.createElement(a.JsonLd,{defer:d,json:l})}},4538:function(e,t,r){var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.SocialProfileJsonLd=void 0;var o=n(r(7294)),i=r(2323);t.SocialProfileJsonLd=function(e){var t=e.type,r=e.name,n=e.url,a=e.sameAs,c=void 0===a?[]:a,u=e.defer,s=void 0!==u&&u,d='{\n    "@context": "http://schema.org",\n    "@type": "'.concat(t,'",\n    "name": "').concat(r,'",\n    "url": "').concat(n,'",\n    "sameAs": [\n      ').concat(c.map((function(e){return'"'.concat(e,'"')})).toString(),"\n     ]\n  }");return o.default.createElement(i.Helmet,{defer:s},o.default.createElement("script",{type:"application/ld+json"},d))}},9756:function(e,t,r){var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.SpeakableJsonLd=void 0;var o=n(r(9713)),i=n(r(7294)),a=r(9860);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.SpeakableJsonLd=function(e){var t=e.xpath,r=e.cssSelector,n=e.overrides,u=void 0===n?{}:n,s=e.defer,d=void 0!==s&&s;if(t&&r)throw new Error("Speakable should use either xpath or the cssSelector, not both.");var l=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"SpeakableSpecification",cssSelector:r,xpath:t},u);return i.default.createElement(a.JsonLd,{defer:d,json:l})}},1326:function(e,t,r){var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.GatsbySeo=void 0;var o=n(r(7294)),i=r(1792);t.GatsbySeo=function(e){var t=e.metaTags,r=e.linkTags,n=e.canonical,a=e.description,c=e.facebook,u=e.htmlAttributes,s=e.language,d=e.languageAlternates,l=e.mobileAlternate,f=e.nofollow,p=e.noindex,b=e.openGraph,y=e.title,O=e.titleTemplate,v=e.twitter;return o.default.createElement(i.BaseSeo,{metaTags:t,linkTags:r,canonical:n,description:a,facebook:c,htmlAttributes:u,language:s,languageAlternates:d,mobileAlternate:l,nofollow:f,noindex:p,openGraph:b,title:y,titleTemplate:O,twitter:v})}},4414:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(1792);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}));var o=r(1326);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})}))},8922:function(){}}]);
//# sourceMappingURL=350a352dd880ca5b4bb6a44d662fcc6cf6213a0e-63219444948fc4010d90.js.map