var AutoTopTooltip = (function () {

    /**
     * AutoTopTooltip.
     *
     * @param {object} limits
     * @param {int}    defaultLimit 
     */
    function AutoTopTooltip(limits, defaultLimit) {
        this.limits = limits;

        this.defaultLimit = (typeof defaultLimit !== 'undefined' ? defaultLimit : 500);

        this.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        this.setPosition();
    }

    /**
     * Set position data attribute.
     */
    AutoTopTooltip.prototype.setPosition = function setPosition() {
        var currentLimit = this.getCurrentLimit();

        var bodyRect = document.body.getBoundingClientRect();

        var bodyWidth = bodyRect.width;
        
        var tooltipLinks = document.body.querySelectorAll('a[data-tooltip-position="top auto"]');

        var tooltipCount = tooltipLinks.length;

        for (var i = 0; i < tooltipCount; i++) {
            var tooltipLink = tooltipLinks[i];

            var tooltipRect = tooltipLink.getBoundingClientRect();

            var position = 'top center';

            if (tooltipRect.left < currentLimit) {
                position = 'top left';
            } else if ((bodyWidth - tooltipRect.right) < currentLimit) {
                position = 'top right';
            }
            
            tooltipLink.setAttribute('data-tooltip-position', position);
        }
    };

    /**
     * Get the current limit.
     * 
     * @return {int}
     */
    AutoTopTooltip.prototype.getCurrentLimit = function getCurrentLimit() {
        var currentLimit = this.defaultLimit;

        for (var limitWidth in this.limits) {
            if (this.width < limitWidth && this.limits[limitWidth] < currentLimit) {
                currentLimit = this.limits[limitWidth];
            }
        }

        return currentLimit;
    };

    return AutoTopTooltip;
})();

module.exports = AutoTopTooltip;
