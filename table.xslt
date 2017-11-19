<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:strip-space elements="*"/>
    <xsl:template match="/">
        <HTML>
            <BODY>
                <TABLE>
                    <xsl:apply-templates/>
                </TABLE>
            </BODY>
        </HTML>
    </xsl:template>
    <xsl:template match="Rowset">
        <xsl:apply-templates select="Columns"/>
        <tbody>
            <xsl:apply-templates select="Row"/>
        </tbody>
    </xsl:template>
    <xsl:template match="Columns">
        <thead><tr><xsl:apply-templates/></tr></thead>
    </xsl:template>
    <xsl:template match="Columns/*">
        <th><xsl:apply-templates select="@Description"/></th>
    </xsl:template>
    <xsl:template match="Row">
        <tr><xsl:apply-templates/></tr>
    </xsl:template>
    <xsl:template match="Row/*">
        <td><xsl:apply-templates/></td>
    </xsl:template>
</xsl:stylesheet>