# URL used for canonical, hreflang, og:url and USERFUNC HeaderData.php
lib.currentUrl = TEXT
lib.currentUrl {
	typolink {
		parameter.data = page:tx_csseo_canonical // page:content_from_pid // page:uid
		forceAbsoluteUrl = 1
		returnLast = url
		# use only params that are considered for the cache
		additionalParams.data = tx_csseo_url_parameters
		# add cHash
		useCacheHash = 1
	}
}