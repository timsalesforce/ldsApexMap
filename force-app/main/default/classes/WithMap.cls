public class WithMap {
    @AuraEnabled(cacheable=true)
    public static string mapArg(Map<String, String> theMap) {
        try {
            if (theMap != null && theMap.values().size() > 0) {
                return theMap.values()[0];
            }
            return 'NONE';
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static string mapArg2(Map<String, String> theMap) {
        try {
            if (theMap != null && theMap.values().size() > 0) {
                return theMap.values()[0];
            }
            return 'NONE';
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}